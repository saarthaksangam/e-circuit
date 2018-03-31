var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Burger');

console.log('connected to server');
module.exports = {
  mongoose
};
