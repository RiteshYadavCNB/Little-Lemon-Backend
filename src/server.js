import express from 'express';
import errorHandler from './middlewares/error.js';
import logger from './middlewares/logger.js';
import connectDB from './config/db.js';
import productRouter from './routes/product.js';
import keepAliveRouter from './utils/keepAlive.js';
import cors from 'cors';

const PORT = process.env.PORT;

// initializing app module
const app = express();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//  logger middleware
app.use(logger);

// error middleware
app.use(errorHandler);

// connect to MongoDB database
connectDB();

// enabling CORS for all origins
app.use(cors({
    origin: "*", //allows all origins
    methods: "GET,POST,PUT,DELETE", //specify allowed methods
    allowedHeaders: "Content-Type,Authorization"
}));

// Keeping the render awake
app.use(keepAliveRouter);

// Routes
app.use('/api/products', productRouter);



app.listen(PORT, () => console.log(`server running on port ${PORT}`));