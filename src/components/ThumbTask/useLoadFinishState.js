import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import React from 'react';
const useLoadFinishState = (messageId, groupId) => {
	const postData = {
		groupId: groupId,
		messageId: messageId,
	};
	const [isFinished, setFinished] = React.useState([]);

	useEffect(() => {
		request('POST', '/api/isFinishedTask', postData, (response) => {
				setFinished(response.data)
			}, () => {});
	}, [messageId, groupId]);
	return isFinished;
}
export default useLoadFinishState;
