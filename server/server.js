const express = require('express');
const { connectDB } = require('./config/db');
const cors = require('cors');

const userRoute = require('./routes/user_Route');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'API running...' });
});

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
