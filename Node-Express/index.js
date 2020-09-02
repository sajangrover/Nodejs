const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
app.get('/dishes', (req,res,next) => {
    res.end("send all the dishes");
})

app.post('/dishes', (req,res,next) => {
    res.end("add the dish : " + req.body.name + "with details " + req.body.discription);
})

app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not suported on /dishes');
})

app.delete('/dishes', (req,res,next) => {
    res.end('all dishes deleted');
})

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('send the dish : ' + req.params.dishId);
})

app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end('push operation is not suported on /dishes/' + req.params.dishId);
})

app.put('/dishes/:dishId', (req,res,next) => {
    res.write('update the dish : ' + req.params.dishId + '\n')
    res.end(req.body.name + "with details " + req.body.discription);

})

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end('delete dish : ' + req.params.dishId);
})

app.use((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is Express server</h1></body></html>');

})

app.listen(port,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})
