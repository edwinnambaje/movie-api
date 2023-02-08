const express=require("express");
const Genres=require('../models/Genre');
const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const genre=new Genres({
            name:req.body.name,
            email:req.body.email
        });
        console.log(genre)
        const genresa=await genre.save();
        return res.status(200).send(genresa)
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get('/',async(req,res)=>{
    try {
        const genre=await Genre.find();
        res.send(genre);
    } catch (error) {
        res.status(400).json({message:"error"})
    }
})
module.exports=router