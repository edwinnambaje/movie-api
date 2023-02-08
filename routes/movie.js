const express=require("express");
const mongoose=require('mongoose'); 
const Genres=require('../models/Genre');
const Movie=require('../models/Movie');
const router=express.Router();

router.get('/',async(req,res)=>{
    try {
        const movie=await Movie.find()
        .populate('genre','name -_id')
        res.send(movie);
    } catch (error) {
        res.status(400).json(error)
    }
})
router.post('/:id',async(req,res)=>{
    try {
        const genre=await Genres.findById(req.params.id)
        if(!genre)return res.status(400).json({message:"Invalid Genre"});
        let movie=new Movie({
            title:req.body.title,
            genre:{
                _id:genre._id,
                name:genre.name
            },
            numberInStock:req.body.numberInStock,
            dailyRentalState:req.body.dailyRentalState,
        })
        movie=await movie.save();
        res.send(movie)
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=router