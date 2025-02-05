import mongoose from 'mongoose';
const mongoDbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(`${mongoDbUrl}`);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
};

export default connectDB;