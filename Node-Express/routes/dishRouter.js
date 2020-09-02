const express = require('express');
const dishRouter = express.Router();
const bodyParser = require('body-parser');

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
    res.end("add the dish : " + req.body.name + "with details " + req.body.discription);
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not suported on /dishes');
})

.delete((req,res,next) => {
    res.end('all dishes deleted');
})

module.exports = dishRouter;
