//importing Schema
const item = require('../models/movieItems');

const express = require('express');
//using router to add all functionality
var router = express.Router();

//retrieving all the movies
router.get('/movies',function(req,res,next){
 item.find(function(err,items){
   if(err){
     throw err;
   }
   else{
     res.json(items);
   }
 });
});
router.get('/movies/:_id',function(req,res,next){
  item.findById({_id:req.params._id},function(err,result){
    if(err){
      throw err;
    }
    else{
      res.json(result);
    }
  });
});
//insert movie into the database
router.post('/movie',function(req,res,next){
  let newMovieItem = new item({
    movie_name : req.body.movie_name,
    movie_genre : req.body.movie_genre,
    movie_description : req.body.movie_description,
    movie_image : req.body.movie_image,
    movie_release :  req.body.movie_release
  });
  newMovieItem.save(function(err,item){
    if(err){
      throw err;
    }
    else{
      res.json({msg : 'movie has been added successfully'});
    }
  });
});

//delete movie from database
router.delete('/movie/:_id',function(req,res,next){
  item.remove({_id:req.params._id},function(err,result){
    if(err){
      throw err;
    }
    else{
      res.json(result);
    }
  });
});

//updating movie in database
router.put('/movie/:_id',function(req,res,next){
  item.findOneAndUpdate({_id : req.params._id},{
    $set:{
      movie_name :  req.body.movie_name,
      movie_genre : req.body.movie_genre,
      movie_description : req.body.movie_description,
      movie_image : req.body.movie_image,
      movie_release :  req.body.movie_release
    }},function(err,result){
      if(err){
        throw err;
      }
      else{
        res.json(result);
      }
    });
});


module.exports = router;
