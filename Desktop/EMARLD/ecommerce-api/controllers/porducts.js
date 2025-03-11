import { ProductModel } from "../models/products.js";
import { addProductValidator } from "../validators/products.js";


export const addProduct = async (req, res, next) => {
   try {
     // upload product image
     // validate product information
     const { error, value } = addProductValidator.validate(req.body, { abortEarly: false });
     if (error) {
      return res.status(422).json(error); 
      
     }
     // save product information in database
     const result = await ProductModel.create(value);
     // return response
     res.status(201).json(result);
   } catch (error) {
        next(error);
   }
}
// Arrangiing the back end..............

export const getProducts = async (req, res, next) => {
  try {
      // fetch prducts from database
      const result = await ProductModel.find();
      res.json(result);
  } catch (error) {
    next(error);
    
  }
}

export const countProducts = (req, res) => {
    res.send('All products count!');
}

export const updateProduct = (req, res) => {
    res.send(`Product with id ${req.params.id} updated!`)
}

export const deleteProduct = (req, res) => {
    res.send(`Product with id ${req.params.id} deleted!`);
}