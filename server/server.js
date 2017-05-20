var express = require('express');
var bodyParser=require('body-parser');

var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
        res.send({todo});
    }).catch((e)=>res.status(400).send());

});

app.listen(3000,()=>{
  console.log('Started on port 3000');
});



// var newTodo = new Todo({
//   text:'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo');
// });
//
// var newTodo2 = new Todo({
//   text:'Going to the gym',
//   completed: false,
//   completedAt: new ObjectID().getTimestamp()
// });
//
// newTodo2.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo',e);
// });
//
//
//
// var newUser = new User({
//   email:'mpadilla@unb.ca'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved user', doc);
// },(e)=>{
//   console.log('Unable to save user');
// });
