// Import required modules
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const connectDatabase=require('./config/connectDatabase');
const cors=require('cors');
// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json())
app.use(cors());
// Middleware to use routes
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
