import express from 'express';
import { createProduct, deleteProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

// routes

// get all products from productInfo Collection from DB
router.get('/', getProducts);



// create new entry into the productInfo collection into DB
router.post('/', createProduct);

// delete a document from the productInfo collection from DB
router.delete('/', deleteProduct);


export default router;
