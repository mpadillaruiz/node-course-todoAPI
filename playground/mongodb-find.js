// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);

//it takes two arguments, where your database lives (localhost) and a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   //Find returns a pointer to the document, not the document itself.
//   //toArray returns an array of the documents
//   db.collection('Todos').find({
//     _id: new ObjectID('591f59d1672c632704a4e6e8')
//   }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined, 2));
//   }, (err)  =>{
//     console.log('Unable to fetch todos',err);
//   });

//Find returns a pointer to the document, not the document itself.
//toArray returns an array of the documents
// db.collection('Todos').find().count().then((count)=>{
// console.log('Todos count: '+count);
//
// }, (err)  =>{
//   console.log('Unable to fetch todos',err);
// });

db.collection('Users').find().count().then((count)=>{
console.log('Todos count: '+count);

}, (err)  =>{
  console.log('Unable to fetch todos',err);
});

//toArray is not the only method you can use to get the documents
//count returns the number of documents returned by the query
  //db.close();
});
