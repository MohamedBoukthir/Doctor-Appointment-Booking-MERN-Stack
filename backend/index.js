import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './Routes/auth.js';

// config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
}

app.get('/', (req, res) => {
    res.send('LOOOOOOOOOOOOL');
});

// middleware 
app.use(express.json);
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);

// database connection
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database is connected')
    } catch (error) {
        console.log('You Got Error')
    }
}

// App listening
app.listen(port, () => {
    connectDB();
    console.log('server is running on port ' + port);
});