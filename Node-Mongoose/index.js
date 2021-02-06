const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://127.0.0.1:27017/conFusion';

const connect = mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology: true });

connect.then((db)=> {
    console.log("connected to database");

    const newDish = new Dishes({
        name: 'burger1',
        description: 'blahlahblah...'
    })

    newDish.save()
        .then((dish) => {
            return Dishes.find({}).exec();
        }).then((dishes) =>{
            console.log(dishes);

            return Dishes.remove();
        }).then(() =>{
            return mongoose.connection.close();
        }).catch((err) => {
            console.log("error", err);
        })
})