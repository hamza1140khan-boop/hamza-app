require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mount API routes
try {
    const apiRoutes = require('./routes/api.js');
    app.use('/api', apiRoutes);
} catch (e) {
    console.log('Routes loaded directly or via server.ts');
}

app.get('/api/health', (req, res) => {
    res.json({ status: 'Muscle Up Server Running', timestamp: new Date() });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Muscle Up Server running on http://localhost:${PORT}`);
});
