const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const router = express.Router();
const url = "mongodb://localhost:27017";
//const posts = require('../../dbstore/posts')

//Get Posts
router.get('/', async (req, res) => {
    //res.json(posts); //rudimentary fetch
    const posts = await loadPosts();
    res.send(await posts.find({}).toArray());
});

//Add a Post
router.post('/', async (req,res) => {
    const posts = await loadPosts();
    await posts.insertOne({
        author: "Web API",
        content: req.body.content,
        username: "web_api",
        createdAt: new Date()
    })
    res.status(201).send();
})
//Delete a Post
router.delete('/:id', async(req, res) => {
    const posts = await loadPosts();
    await posts.deleteOne({_id: new mondgodb.ObjectID(req.params.id)});
    res.status(200).send(`Post ${req.params.id} deleted`);
})

// FUNCTIONS 
async function loadPosts(){
    const client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = client.db('tldr');
    const collection = db.collection('articles');
    return collection;
}
// FUNCTIONS

module.exports = router;