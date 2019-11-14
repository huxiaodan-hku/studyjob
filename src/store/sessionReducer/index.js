const INITIAL_VALUE = {
	isLogin: false,
	userName: '',
	userAvartarUrl: ''
}

const sessionReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'update_islogin':
			return {
				...state,
				isLogin: action.data
			};
		case 'update_username':
			return {
				...state,
				userName: action.data
			};
		case 'update_user_avartar_url':
			return {
				...state,
				userAvartarUrl: action.data
			};
		default:
			return state;
	}
}

const updateLoginStatus = (data) => {
	return {type: 'update_islogin', data: data}
}

const updateUserName = (data) => {
	return {type: 'update_username', data: data}
}

export {
	sessionReducer,
	updateLoginStatus,
	updateUserName
};
