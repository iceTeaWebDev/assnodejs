import productModel from '../models/product'
import { productSchema } from '../schemas/product'

export const getAllProduct = async (req, res) => {
    try {
        const product = await productModel.find()
        if(product.length === 0) {
            return res.status(400).json({message: "Dont have any product"})
        }
        return res.status(200).json({data: product})
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => {
    try {
        const data = await productModel.findOne({_id: req.params.id });
        if(!data) return res.status(400).json({message: "Product not found"})
        return res.status(200).json({data: data})
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const addProduct = async (req, res) => {
    try {
        const body= req.body;
        const {error} = productSchema.validate(body);
        if(error) {
            return res.status(400).json({message: error.details.map(item => item.message)})
        }

        const data = await productModel.create(body);
        if(!data) {
            return res.status(400).json({message: "Add fail!"});
        }

        return res.status(200).json({
            data: data,
            message: "Success"
        })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const {error} = productSchema.validate(body);
        if(error) {
            return res.status(400).json({message: error.details.map(item => item.message)})
        }
        const data = await productModel.findOneAndUpdate({_id: id}, body, {new: true});
        if(!data) return res.status(400).json({message: "Update fail!"});
        return res.status(200).json({data: data, message: "Success"})
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const data = await productModel.findByIdAndDelete(req.params.id);
        if(!data) return res.status(400).json({message: "Delete fail!"});
        return res.status(200).json({message: "Success", data})
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}