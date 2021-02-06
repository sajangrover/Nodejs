const mongoose = require('mongoose');

const schema = mongoose.Schema;

const dishSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;