import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import React from 'react';
const useLoadUnFinishedUsers = (messageId, groupId) => {
	const postData = {
		groupId: groupId,
		messageId: messageId,
	};
	const [unfinishedUsers, setunfinishedUsers] = React.useState([]);

	useEffect(() => {
		request('POST', '/api/getUnFinishedUsers', postData, (response) => {
				setunfinishedUsers(response.data)
			}, () => {});
	}, [messageId, groupId]);
	return unfinishedUsers;
}
export default useLoadUnFinishedUsers;
