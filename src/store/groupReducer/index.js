const INITIAL_VALUE = {
	groupId: '9d6fefd4-c31d-4285-b55c-a9b96c6ddb61',
}

const groupReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'UPDATE_GROUP_ID':
			return {
				...state,
				groupId: action.data
			};
		default:
		  return state;
	}
}

const udpateGroupId = (groupId) => {
	return {type: 'UPDATE_GROUP_ID', data: groupId};
}

export {
	groupReducer,
	udpateGroupId,
};
