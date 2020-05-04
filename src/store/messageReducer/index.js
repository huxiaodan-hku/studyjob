const INITIAL_VALUE = {
	messages: [],
}

const messageReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'INIT_MESSAGE':
			return {
				...state,
				messages: action.data,
			};
		case 'ADD_MESSAGE':
		  var arr = []
			arr.push(...state.messages);
			arr.push(action.data);
			return {
				...state,
				messages: arr
			};
		default:
		  return state;
	}
}

const addMessages = (message) => {
	return {type: 'ADD_MESSAGE', data: message};
}
const initMessages = (messages) => {
	return {type: 'INIT_MESSAGE', data: messages};

}

export {
	messageReducer,
	addMessages,
	initMessages,
};
