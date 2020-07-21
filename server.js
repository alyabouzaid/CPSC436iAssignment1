

var usersRouter = require('./routes/users');

// const mongoose= require('mongoose');

// export var Streams = require('./models/StreamModel.js');

const express = require('express');
const PORT = process.env.PORT || 9000;
const mongoose= require('mongoose');
const path = require('path');

var cors = require('cors');

const app = express();


app.use(express.static(path.join(__dirname + '/my-app/build')));



app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// app.set('view engine', 'ejs')
// app.get('/',)

// process.env.MONGODB_URI ||
mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://m001-student:ali12345@cluster0-xfebn.mongodb.net/messages?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  console.log('connection succesfull okay'))
.catch((err) => console.log("aaaaaa"));

mongoose.connection.on('connected', () => {
    console.log('connected to the server');
})
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// app.use(cors());

app.use('/users', usersRouter);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/my-app/build/index.html'));
// });

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('my-app/build'))

}

// app.set('port', PORT);
app.listen(PORT,console.log(PORT));

// var Schema = mongoose.Schema;
// var streamSchema = new Schema({
//     key: Number,
//     date: String,
//     speaker: String,
//     description: String
// }, { versionKey: false });

// var Streams = mongoose.model('messages', streamSchema);


// module.exports = Streams;


//  mongoose.connect('mongodb://localhost/ReactReduxExpressMongo')
//    .then(() =>  console.log('connection succesful'))
//    .catch((err) => console.error(err));



// mongoose.connection.collections['messages'].drop( function(err) {
//     console.log('collection dropped');
// });

   



// messagessss = [
//     {	
//         "key": 0,
//         "date": "05/18/2020",
//         "speaker":"Abouzaid Aly",
//         "description": "heeey"
//     },
//     {	
//         "key":1,
//         "date": "05/20/2020",
//         "speaker":"Aly Abouzaid",
//         "description": "Hello"

//     }
//     ]

// Streams.insertMany(messagessss,function(error, docs) {})

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