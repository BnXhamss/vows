import express from 'express';
import ProductsRouter from './routes/products.js';
import mongoose from 'mongoose';

// Make database connection

await mongoose.connect(process.env.MONGO_URI);

// Create an Express app
const app = express();

// Use global middlewares
app.use(express.json());

// use routes
app.use(ProductsRouter);

// Listen for  incoming request 
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});