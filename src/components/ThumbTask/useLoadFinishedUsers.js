import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import React from 'react';
const useLoadFinishedUsers = (messageId, groupId) => {
	const postData = {
		groupId: groupId,
		messageId: messageId,
	};
	const [finishedUsers, setFinishedUsers] = React.useState([]);

	useEffect(() => {
		request('POST', '/api/getFinishedUsers', postData, (response) => {
				setFinishedUsers(response.data)
			}, () => {});
	}, [messageId, groupId]);
	return finishedUsers;
}
export default useLoadFinishedUsers;
