


const mongoose= require('mongoose');

// export var Streams = require('./models/StreamModel.js');

const express = require('express')
// const PORT = process.env.PORT || 8000;

const app = express();
app.set('view engine', 'ejs')
app.get('/',)



var Schema = mongoose.Schema;
var streamSchema = new Schema({
    key: Number,
    date: String,
    speaker: String,
    description: String
}, { versionKey: false });

var Streams = mongoose.model('messages', streamSchema);


module.exports = Streams;


 mongoose.connect('mongodb://localhost/ReactReduxExpressMongo')
   .then(() =>  console.log('connection succesful'))
   .catch((err) => console.error(err));



mongoose.connection.collections['messages'].drop( function(err) {
    console.log('collection dropped');
});

   



messagessss = [
    {	
        "key": 0,
        "date": "05/18/2020",
        "speaker":"Abouzaid Aly",
        "description": "heeey"
    },
    {	
        "key":1,
        "date": "05/20/2020",
        "speaker":"Aly Abouzaid",
        "description": "Hello"

    }
    ]

Streams.insertMany(messagessss,function(error, docs) {})

// newMessage.save();
//    messages = {	
//             "key": 0,
//             "date": "05/18/2020",
//             "speaker":"Abouzaid Aly",
//             "description": "heeey"
//         };

// const newMessage = new Streams(messages);


// arrayMessage.save();

// app.post('/', function(req, res){
//     res.json({message: "Hello First API Call!"});
//   });



app.listen(8000);