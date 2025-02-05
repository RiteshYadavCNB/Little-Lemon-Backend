import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    mealType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 5,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }

},
{collection: 'productInfo'});

const ProductModel = model('productInfo', ProductSchema);

export default ProductModel;