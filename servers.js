const express = require('express');
const app = express();
const notificationRoute = require('./routes/notificationRoute');

require("dotenv").config();

app.use(express.json()); // Parse JSON bodies

app.use('/api/notification', notificationRoute);

const PORT = process.env.PORT || 5045;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
