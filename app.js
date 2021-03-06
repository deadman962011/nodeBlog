const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const morgan = require('morgan');
const path = require('path');
const app = express();




//require routes

var mainRoutes = require('./routes/mainRoutes.js')
var AdminRoutes = require('./routes/AdminRoutes.js')







// connect to mongodb
console.log(process.env.mongodbSite);
var mongo='mongodb+srv://deadman962011:a55221225522122@blaxkclauser-bp8pp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongo,{ useNewUrlParser: true });

//





// app managment
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
//



//use routes 

app.use('/',mainRoutes)
app.use('/Admin',AdminRoutes)





app.listen(8080,function (err) {

if(!err){
  console.log('nodeBlog running on 8080');
}

})
