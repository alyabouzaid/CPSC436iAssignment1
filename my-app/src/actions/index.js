
import axios from 'axios'

export const addingMessage = amount => {
	return {
		type: 'INCREMENT_MESSAGE',
		addingMessage: amount
	};
};


export const removeMessages = amount => {
	return {
		type: 'CLEAR_MESSAGES',
		addingMessage: amount
	};
};


export const initialData = () => {
	return  (dispatch) => {

    axios.get('http://localhost:9000/users')
    .then(
		(res) => {
			dispatch(initialMessages(res.data))
	}
    )

	.catch(err => err)
	}
}

export const initialMessages = (recommendation) => {
	return {
		type: 'INITIALIZE_MESSAGES',
		payload: recommendation
	};
};