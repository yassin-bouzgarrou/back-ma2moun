const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const  cors = require('cors')
console.log("start");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/trades', require('./src/routes/tradeRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
