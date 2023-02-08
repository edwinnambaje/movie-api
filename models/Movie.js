
const mongoose=require('mongoose');
const MovieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    genre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    numberInStock:{
        type:Number,
        min:0,
        max:255,
        default:0
    },
    dailyRentalState:{
        type:Number,
        min:0,
        max:255,
        default:0
    }
})
module.exports=mongoose.model('Movie',MovieSchema);