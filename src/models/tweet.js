const mongoose = require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{          // content must be present in the tweet schema
        type:String,   // they are in the json format
        required:true,
        max:[250 , 'Tweet cannot be more than 250 characters']
    },
    hashtags:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
   
},{timestamps:true}); 

const Tweet=mongoose.model('Tweet',tweetSchema);
  module.exports = Tweet;
 