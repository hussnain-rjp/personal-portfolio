const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable inside Vercel');
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('portfolioDB');

    cachedClient = client;
    cachedDb = db;
    return { client, db };
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('data');

        if (req.method === 'GET') {
            const data = await collection.findOne({ type: 'portfolio' });
            if (!data) {
                return res.status(200).json({ defaultFallback: true });
            }
            return res.status(200).json(data.content);
        }

        if (req.method === 'POST') {
            const { password, content } = req.body;

            const correctPassword = process.env.ADMIN_PASSWORD || 'musarahim';
            if (password !== correctPassword) {
                return res.status(401).json({ error: 'Unauthorized: Invalid password' });
            }

            if (!content) {
                return res.status(200).json({ success: true, verified: true });
            }

            await collection.updateOne(
                { type: 'portfolio' },
                { $set: { content, lastUpdated: Date.now() } },
                { upsert: true }
            );

            return res.status(200).json({ success: true });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error("API error:", error);
        return res.status(500).json({ error: error.message });
    }
};
