const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end("send all the dishes");
})
.post((req,res,next) => {
    res.end("add the dish : " + req.body.name + " with details " + req.body.discription);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not supported on /dishes');
})
.delete((req,res,next) => {
    res.end('all dishes deleted');
})

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end('send the dish : ' + req.params.dishId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('push operation is not suported on /dishes/' + req.params.dishId);
})
.put((req,res,next) => {
    res.write('update the dish : ' + req.params.dishId + '\n')
    res.end(req.body.name + "with details " + req.body.discription);
})
.delete((req,res,next) => {
    res.end('delete dish : ' + req.params.dishId);
})

module.exports = dishRouter;
