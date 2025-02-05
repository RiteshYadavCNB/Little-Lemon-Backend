import express from 'express';
import errorHandler from './middlewares/error.js';
import logger from './middlewares/logger.js';
import connectDB from './config/db.js';
import router from './routes/product.js';

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

// Routes
app.use('/api/products', router);


app.listen(PORT, () => console.log(`server running on port ${PORT}`));