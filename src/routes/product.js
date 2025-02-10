import express from 'express';
import { createProduct, deleteProduct, getProducts } from '../controllers/productController.js';

const productRouter = express.Router();

// routes

// get all products from productInfo Collection from DB
productRouter.get('/', getProducts);



// create new entry into the productInfo collection into DB
productRouter.post('/', createProduct);

// delete a document from the productInfo collection from DB
productRouter.delete('/', deleteProduct);


export default productRouter;
