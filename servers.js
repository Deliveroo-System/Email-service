const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if using cookies or sessions
}));

// Body parser middleware
app.use(express.json());

// Routes
app.post('/api/notification/payment-success', (req, res) => {
  const { customerEmail } = req.body;
  console.log(`Sending payment confirmation to: ${customerEmail}`);
  // Simulate success
  res.status(200).json({ message: 'Email sent successfully' });
});

// Start server
app.listen(5045, () => {
  console.log('Server running on http://localhost:5045');
});
