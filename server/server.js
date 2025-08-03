require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendEmail } = require('./emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Configure CORS
const allowedOrigins = [
    'http://localhost:3000',
    'https://adityakarmalkar.vercel.app',
    'https://adityakarmalkar.netlify.app'
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(bodyParser.json());

// Email endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate request
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Name, email, and message are required.' 
        });
    }

    try {
        await sendEmail({ name, email, message });
        res.json({ 
            success: true, 
            message: 'Email sent successfully!' 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email',
            error: error.message 
        });
    }
});

// Basic route for health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoint: POST http://localhost:${PORT}/api/send-email`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION! 💥 Shutting down...');
    console.error(err);
    server.close(() => {
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.error(err);
    server.close(() => {
        process.exit(1);
    });
});
