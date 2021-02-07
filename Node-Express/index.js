const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/conFusion';

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology: true }).then((db) =>{
    console.log("connected to database");
},(err) => {
    console.log(err);
});

app.use((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is Express server</h1></body></html>');

})

app.listen(port,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})
