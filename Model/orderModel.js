import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    cellno: { type: Number, required: true },
    address: { type:String, required:true},
    city: { type: String, default: true },
    state: { type:String, required:true },
    transId:{ type:String, required:true},
    paymentStatus:{ type:String, required:true},
    orderStatus: { type:String, default: "placed"},
    amount: { type:Number, required:true },
    orderItems: [
      {
        name: { type: String, required: true },
        capacity: { type: Number, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock:{ type: Number, required: true },
        brand: { type: String, required: true },
        description:{ type: String, required: true },
        cartQuantity:{ type: Number, required: true },
      }
    ],
    
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;