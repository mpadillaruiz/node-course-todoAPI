var mongoose = require('mongoose');
const {ObjectID} = require('mongodb');

//Set up mongoose to use promises
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');

module.exports={
  mongoose
};
