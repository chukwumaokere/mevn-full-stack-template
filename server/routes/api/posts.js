const express = require('express')
const mongodb = require('mongodb');
const router = express.Router();
const posts = require('../../dbstore/posts')
//Get Posts
router.get('/', (req, res) => {
    res.json(posts); //rudimentary fetch
});

/*
async function loadPosts(){
    const client = await mongodb.MongoClient.connect('',{
        useNewUrlParser: true,
    })
}*/

//Add a Post

//Delete a Post

module.exports = router;