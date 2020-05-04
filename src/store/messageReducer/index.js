const INITIAL_VALUE = {
	messages: [],
}

const messageReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
		  var newMessage = [];
			newMessage.push(state.messages);
			newMessage.push(action.data);
			return {
				...state,
				messages: newMessage
			};
		default:
		  return state;
	}
}

const addMessage = (message) => {
	return {type: 'ADD_MESSAGE', data: message};
}

export {
	messageReducer,
	addMessage,
};
