const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mevn-db";
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db){
    if (err) console.log(err);
    console.log('Database Created!');
    db.close();
})
*/

const app = express();

//Middleware
app.use(bodyParser.json()).use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})