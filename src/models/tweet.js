const mongoose = require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{          // content must be present in the tweet schema
        type:String,   // they are in the json format
        required:true
    },
    userEmail:{            // user email must be present in the tweet schema value can be null or not present 
        type:String
    },
    comments:[
    {
        content:{
            type:String,
            required:true
        }

    }
]
},{timestamps:true}); 

const Tweet=mongoose.model('Tweet',tweetSchema);
  module.exports = Tweet;
 