
import { combineReducers } from 'redux';
import {Streams} from '../components/App';

const counterReducer = (count = 0, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
		return count + action.increment;
	}
	return count;
};


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
// 	if (err) throw err;
// 	var dbo = db.db("mydb");
// 	var myobj = [
// 	  { name: 'John', address: 'Highway 71'},
// 	  { name: 'Peter', address: 'Lowstreet 4'},
// 	  { name: 'Amy', address: 'Apple st 652'},
// 	  { name: 'Hannah', address: 'Mountain 21'},
// 	  { name: 'Michael', address: 'Valley 345'},
// 	  { name: 'Sandy', address: 'Ocean blvd 2'},
// 	  { name: 'Betty', address: 'Green Grass 1'},
// 	  { name: 'Richard', address: 'Sky st 331'},
// 	  { name: 'Susan', address: 'One way 98'},
// 	  { name: 'Vicky', address: 'Yellow Garden 2'},
// 	  { name: 'Ben', address: 'Park Lane 38'},
// 	  { name: 'William', address: 'Central st 954'},
// 	  { name: 'Chuck', address: 'Main Road 989'},
// 	  { name: 'Viola', address: 'Sideway 1633'}
// 	];
// 	dbo.collection("customers").insertMany(myobj, function(err, res) {
// 	  if (err) throw err;
// 	  console.log("Number of documents inserted: " + res.insertedCount);
// 	  db.close();
// 	});
//   });



const counterMessagesReducer = (messages = [
	{	"__id":0,
		"key": 0,
		"date": "05/18/2020",
		"speaker":"Abouzaid Aly",
		"description": "heeey"
	},
	{	
		"__id":0,
		"key":1,
		"date": "05/20/2020",
		"speaker":"Aly Abouzaid",
		"description": "Hello"

	}
	], action) => {
	if (action.type === 'INCREMENT_MESSAGE') {

		return [...messages, action.addingMessage];

	}

	if (action.type === 'CLEAR_MESSAGES') {

		return [];

	}
	console.log(messages);

	return messages;
};




export default combineReducers({
	count: counterReducer,
	messages: counterMessagesReducer,
});



