const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end('send all the leaders');
})
.post((req,res,next) =>{
    res.end('add new leader : ' + req.body.name + ' with details ' + req.body.discription);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not supported on /leaders');
})
.delete((req,res,next) => {
    res.end('delete all leaders');
})

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res,next) => {
    res.end('send leader : ' + req.params.leaderId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('push operation is not supported on /leader/' + req.params.leaderId);
})
.put((req,res,next) => {
    res.write('update the leader : ' + req.params.leaderId + ' \n');
    res.end(req.body.name + ' with details ' + req.body.discription);
})
.delete((req,res,next) => {
    res.end('delete leader : ' + req.params.leaderId);
})

module.exports = leaderRouter;