import express from 'express';
import Product from '../Model/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.post('/filter', async (req, res) => {
  const products = await Product.find({brand: req.body.item});
  
  res.send(products);
});

export default productRouter;