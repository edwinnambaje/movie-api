const mongoose=require('mongoose');
const express=require('express');
const genre=require('./routes/genre');
const movie=require('./routes/movie');
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://testing:test123@cluster0.o8c7o1i.mongodb.net/test?retryWrites=true&w=majority")
.then(console.log("Connected to database"));
app.use('/',genre)
app.use('/movie',movie)
const port=9000;
app.listen(port,()=>console.log(`running on port ${port}`))