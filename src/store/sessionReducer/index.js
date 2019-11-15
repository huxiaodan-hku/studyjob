const INITIAL_VALUE = {
	jwtToken:'',
}

const sessionReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'update_jwt_token':
			return {
				...state,
				jwtToken: action.data
			};
		default:
		  return state;
	}
}

const updateJwtToken = (data) => {
	return {type: 'update_jwt_token', data: data};
}

export {
	sessionReducer,
	updateJwtToken,
};
