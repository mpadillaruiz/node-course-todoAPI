const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });


//Todo.findOneAndRemove


Todo.findByIdAndRemove('5920cb056e5b121c7cf72bd6').then((todo)=>{
  console.log(todo);
});
