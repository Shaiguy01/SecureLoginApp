const express = require('express')
const app = express()
const UrlPrefix = '/api'
// fruit=post  fruits=posts name=post
const mongoose = require('mongoose')
const Post = require('./models/post')
const fs = require('fs');
const cert = fs.readFileSync('Keys/certificate.pem');
const options = {
    server: {sslCA: cert}};
const ConnString = 'mongodb+srv://admin:Vita4563@cluster0.lezkv41.mongodb.net/?retryWrites=true&w=majority'

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user")

mongoose.connect(ConnString)
.then(()=>
{
    console.log('Connected :-)')
})
.catch(()=>
{
    console.log('NOT Connected :-(')
},options);

app.use(express.json())
app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});
//
app.get(UrlPrefix+'/', (req, res) => {
    res.send('hello world')
})

app.use(UrlPrefix+'/posts',postRoutes)
app.use(UrlPrefix+'/users',userRoutes)

module.exports = app;