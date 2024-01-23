const mongoose=require('mongoose');

const OrderModel=mongoose.Schema(
    {
        "customer": {
            require:true,
            type:String
        },
        "items": {
            require:true,
            type:[],
        },
        "subtotal":{
            require:true,
            type:Number,
        },
        "deliveryCharge": {
            type:Number
        },
        "discount": {
            type:Number
        },
        "totalToPay": {
            require:true,
            type:Number
        }
    },
    {versionKey:false}
);

const Order = mongoose.model('Order',OrderModel);

module.exports=Order;
