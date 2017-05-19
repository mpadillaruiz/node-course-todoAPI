// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Object destructure
// var user ={name: 'Marta',age:25};
// var {name}=user;
// console.log(name);

//Creating object IDs
// var obj = new ObjectID();
// console.log(obj);

//it takes two arguments, where your database lives (localhost) and a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // //Insert data into a database collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if (err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   //ops holds all the documents inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

// Insert new doc into Users (name, age,location)
// db.collection('Users').insertOne({
//   name: 'Marta',
//   age:24,
//   location:'Fredericton'
// },(err,result)=>{
//   if (err){
//     return console.log('Unable to insert user',err);
//   }
//   //ops holds all the documents inserted
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//
// });
  db.close();
});
