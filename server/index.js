const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

//Middleware
app.use(bodyParser.json()).use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})