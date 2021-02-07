const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
const Dishes = require('../models/dishes');

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req,res,next) => {
    Dishes.find({}).then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.json(dishes);
    },err => next(err)).catch(err => next(err))
})
.post((req,res,next) => {
    const newDish = new Dishes(req.body);
    newDish.save().then((dishes) => {
        console.log("dish created")
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.json({status : "dish created"});
    },err => next(err)).catch(err => next(err))
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put operation is not supported on /dishes');
})
.delete((req,res,next) => {
    Dishes.remove({}).then((result) => {
        console.log("all dishes deleted")
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.json(result);
    },err => next(err)).catch(err => next(err))
})

dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId).then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.json(dishes);
    },err => next(err)).catch(err => next(err))
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('push operation is not suported on /dishes/' + req.params.dishId);
})
.put((req,res,next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    Dishes.findByIdAndRemove(req.params.dishId).then((result) => {
        console.log("dish deleted")
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.json(result);
    },err => next(err)).catch(err => next(err))
})

module.exports = dishRouter;
