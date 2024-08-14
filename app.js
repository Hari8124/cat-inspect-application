const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const inspectionRoutes = require('./routes/inspections');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api/inspections', inspectionRoutes);

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    console.log('Serving React app in production mode');
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {
    console.log('Serving welcome message in development mode');
    app.get('/', (req, res) => {
        res.send('Welcome to the CAT Inspect Application!');
    });
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
