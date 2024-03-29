import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types
const cartSchema =new mongoose.Schema({
    user:{
        type:ObjectId,
        required:true,
        ref:"User"
    },
    products:[
        {
            quantity:{
                type:Number,
                default:1
            },
            product:{
                type:ObjectId,
                ref:"product"
            }
        }
    ]
})

export default mongoose.models.Cart||mongoose.model("Cart",cartSchema)