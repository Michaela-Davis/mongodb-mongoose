'use strict';
const mongoose = require('mongoose');
const kittySchema = mongoose.Schema({
    name: String
}, {
    collection: 'kittens'
});

kittySchema.methods.speak = function () {
    const greeting = this.name ? `Meow name is ${this.name}` : `I don't have a name`;
    console.log(greeting);
    return greeting;
};

module.exports = KittyModel;

function KittyModel(connection) {
    return connection.model('Kitten', kittySchema);
}