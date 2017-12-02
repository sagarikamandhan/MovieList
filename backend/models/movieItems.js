const mongoose = require('mongoose');
const movieItemSchema = mongoose.Schema({
  movie_name :{
    type :  String,
    required : true
  },
  movie_genre:{
    type :String,
    required : true
  },
  movie_description:{
    type : String,
    required:true
  },
  movie_release:{
    type: Boolean,
    required : true
  },
  movie_image:{
    type: String,
    required : true
  }

});

const items = module.exports = mongoose.model('items',movieItemSchema);
