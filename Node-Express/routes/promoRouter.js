const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end('send all the promotions');
})
.post((req,res,next) =>{
    res.end('add new promotion : ' + req.body.name + ' with details ' + req.body.discription);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not supported on /promotions');
})
.delete((req,res,next) => {
    res.end('delete all promotions');
})

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end('send promotion : ' + req.params.promoId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('push operation is not supported on /promotion/' + req.params.promoId);
})
.put((req,res,next) => {
    res.write('update the promotion : ' + req.params.promoId + ' \n');
    res.end(req.body.name + ' with details ' + req.body.discription);
})
.delete((req,res,next) => {
    res.end('delete promotion : ' + req.params.promoId);
})

module.exports = promoRouter;