import mongoose from "mongoose";

const productModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now   
    },
    status: {
        type: Boolean
    },
    quality: {
        type: Number
    }
})

export default mongoose.model('Product', productModel);