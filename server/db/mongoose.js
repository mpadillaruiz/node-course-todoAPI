var mongoose = require('mongoose');
const {ObjectID} = require('mongodb');

//Set up mongoose to use promises
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={
  mongoose
};
