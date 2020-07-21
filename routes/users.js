var express = require('express');
// var {uuid} = require('uuidv4')
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const mongoose= require('mongoose');

// mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://m001-student:ali12345@cluster0-xfebn.mongodb.net/messages?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() =>  console.log('connection succesful2222zz'))
// .catch((err) => console.error(err));


// let users = mongoose.connection.collections['messages'].find({})

// let users = [

// {
// id:'3',
// name:'aly'

// },

// {
// id:'2',
// name:'ali'

// }

// ];

var Schema = mongoose.Schema;
var streamSchema = new Schema({
    key: Number,
    date: String,
    speaker: String,
    description: String
}, { versionKey: false });

var Streams = mongoose.model('messages', streamSchema);



router.get('/', function(req, res, next) {

  
  console.log('users')
  let users = Streams.find({}).then(
    
    (data) => {
    console.log('Data: ',data)

    res.json(data);}

  ).catch((error) => {console.log('error ', error) })

  // /const foundUser = users.find(user => user.key === req.params.userId)
  // res.setHeader('Content-Type','application/json')
  // res.send(users);

});


router.get('/:userId', function(req, res, next) {
  
  let users = Streams.find({}).then(
    
    (data) => {
    console.log('Data: ',data)
    const foundUser = data.find(user => Number(user.key) === Number(req.params.userId))

    // console.log(foundUser)
    // console.log(req.params.userId)
    // console.log(data)

    res.send(foundUser);}

  ).catch((error) => {console.log('error ', error) })

  // const foundUser = users.find(user => user.key === req.params.userId)
  // res.setHeader('Content-Type','application/json')
  // res.send(foundUser);
});


router.post('/post', function(req,res,next){
  console.log(req.body)
  // console.log(req)

  let stream = new Streams(req.body)

  stream.save()
  res.setHeader('Content-Type','application/json')
  res.send(stream);
})



router.delete('/messages', function(req,res,next){


  mongoose.connection.collections['messages'].drop( function(err) {
    console.log('collection dropped');
});

  let stream = new Streams(req.body)

  res.setHeader('Content-Type','application/json')
  res.send(stream);
  })

module.exports = router;
