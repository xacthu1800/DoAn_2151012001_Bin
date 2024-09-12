const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 5000;

const { db } = require('./firebase-config');
const { collection, getDocs } = require('firebase/firestore');

app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/api/data', async (req, res) => {
    try {
        const dataCollection = collection(db, 'your_collection_name');
        const snapshot = await getDocs(dataCollection);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
