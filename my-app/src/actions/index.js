

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