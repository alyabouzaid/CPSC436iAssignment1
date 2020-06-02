
import { combineReducers } from 'redux';

const counterReducer = (count = 0, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
		return count + action.increment;
	}
	return count;
};


const counterMessagesReducer = (messages = [
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



