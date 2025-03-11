import { Router } from "express";
import { addProduct, countProducts, deleteProduct, getProducts, updateProduct } from "../controllers/porducts.js"; 

// Create products router
const ProductsRouter = Router();

// Define Routes
ProductsRouter.post('/products', addProduct);

ProductsRouter.get('/products',getProducts);

ProductsRouter.get('/product/const', countProducts);

ProductsRouter.patch('/products/:id', updateProduct);

ProductsRouter.delete('/products/:id', deleteProduct);

// Export router
export default ProductsRouter;