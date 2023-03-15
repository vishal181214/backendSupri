import express from 'express';
import Order from '../Model/orderModel.js';
const orderRoute = express.Router()

orderRoute.post('/orders',async(req,res)=>{
    
    const newOrder = await new Order({
        email: req.body.orderDetails.email,
        fullName: req.body.orderDetails.fullName,
        cellno: req.body.orderDetails.cellno,
        address: req.body.orderDetails.address,
        city: req.body.orderDetails.city,
        state: req.body.orderDetails.state,
        transId: req.body.orderDetails.orderId,
        paymentStatus: req.body.orderDetails.status,
        amount: req.body.orderDetails.amount,
        orderItems: req.body.itemDetails,
    })
    const order = await newOrder.save();
    (order) ? res.status(200).send("Order Confirmed!") : res.status(200).send("Error in Storing data!");
    
})

orderRoute.post('/myOrders',async(req,res)=>{
    const order = await Order.find({ email: req.body.email});
    if(order)
        res.status(200).send(order);
    else
        res.status(200).send({message:'No Order Found'});
});

orderRoute.post('/allOrders',async(req,res)=>{
    const order = await Order.find();
    if(order)
        res.status(200).send(order);
    else
        res.status(200).send({message:'No Order Found'});
});

orderRoute.post('/getDetails',async(req,res)=>{
    const order = await Order.find({ _id: req.body.orderId });
    if(order)
        res.status(200).send(order);
    else
        res.status(200).send({message:'No Order Found'});
});

export default orderRoute;