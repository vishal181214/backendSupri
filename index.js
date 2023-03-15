import express from 'express';
import cors from 'cors';
import './connection.js'
import userRouter from './Route/RegisterRoute.js';
import productRouter from './Route/ProductRoute.js';
import orderRoute from './Route/OrderRoute.js';
const PORT = process.env.PORT || 5300;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
})


app.post('/auth',(req,res)=>{
    res.send("got it")
});

app.use('/user', userRouter);
app.use('/getallproducts', productRouter);
app.use('/getorders', orderRoute)

app.get('api/paypal',(req,res)=>{
    res.send("AZ8tHmq_ZJetIwmrsEUs-CeFaFUMNL04eoHOyJwICDz7UzO3PUCTuf9HIELJFsWjTQyJFgkNEqpkcKeB")
})

app.listen(PORT,()=>{
    console.log("Server Running !");
})
