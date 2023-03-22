import express from 'express';
import { getAllProduct, getProduct, addProduct, updateProduct, deleteProduct } from '../controllers/product';

const router = express.Router();

router.get("/products", getAllProduct);
router.get("/products/:id", getProduct);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;