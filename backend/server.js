import express from 'express';
import dotenv from 'dotenv';


import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World');
})






app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});