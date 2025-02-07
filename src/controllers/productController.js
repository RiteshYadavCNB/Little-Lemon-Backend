import ProductModel from "../models/productModel.js";

// get all products --- get products by search query
// GET api/products
export const getProducts = async(req, res) => {
    try{
        // check if a query parameter exists
        if(req.query.q){
            const searchQuery = req.query.q;
            console.log('searching for:', searchQuery);

            // find by name --- case sensitive search
            const product = await ProductModel.find({name: {$regex: new RegExp(searchQuery, "i")}});
            return res.status(200).json(product);
        }
        const products = await ProductModel.find();
        return res.status(200).json(products);
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// create new product
// POST api/products
export const createProduct = async(req, res) => {
    try{
        const newProduct = await req.body;
        await ProductModel.create(newProduct)
        .then((createdProduct) => {
            if(!createdProduct) return res.status(404)
                .json({
                    success: false,
                    message: "Object creation failed",
                    error: "unable to create obj"
                })
            res.status(201).json({
                    success: true,
                    createdProduct
                })
        })
        .catch((error) => {
            res.status(404)
                .json({
                    success: false,
                    error: error.message
                })
        })
    } catch (err) {
        res.status(500)
        .json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

// delete a product
// DELETE api/product?q=query
export const deleteProduct = async(req, res) => {
    try{
        if(!req.query.q){
            return res.status(500).json({
                success: false,
                message: "include a product name"
            });
        }
        const searchQuery = req.query.q;
        const product = await ProductModel.find({name: {$regex: new RegExp(searchQuery, "i")}});
        await ProductModel.deleteOne({name: {$regex: new RegExp(searchQuery, "i")}});
        res.status(200).json({
            success: true,
            message: `successfully deleted the entry: ${product}`
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};