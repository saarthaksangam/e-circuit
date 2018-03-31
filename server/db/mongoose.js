var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/circuit');

console.log('connect to circuit server');
module.exports = {
  mongoose
};
