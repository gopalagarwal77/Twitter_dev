const express=require('express');
const connect= require('./config/database');
const app=express();
//const Tweet = require('./models/tweet');
const TweetRepository=require('./repositary/tweet-repositary');
const Comment =require('./models/comment');


app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    console.log('DB Connected');
    /* const tweet= await Tweet.create({
      content :'Third  name',
     // userEmail:'abc@gmail.com'
    }); */
    const tweetRepo=new TweetRepository();
    /* const tweet =await tweetRepo.update('64cfdff0384a4fb3a11efe14',
    {
        content :'latest tweet'
    }); */
   /* const tweet=await tweetRepo.createTweet({content:'my tweet'});
    tweet.comments.push({content:'first commnet'});
    await tweet.save();*/
    //const tweet=await tweetRepo.getWithComments('64cf8c0fb7aeb8de33cb1e6e');
   const tweet=await tweetRepo.getAll(0,4);
    console.log(tweet[0].contentWithEmail);

});    