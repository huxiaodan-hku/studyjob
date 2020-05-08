import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import React from 'react';
const useLoadTasks = (shouldNotFinish, groupId) => {
	const postData = {
		groupId: groupId,
		shouldNotFinish: shouldNotFinish,
	};
	const [tasks, setTasks] = React.useState([]);

	useEffect(() => {
		request('POST', '/api/getTasks', postData, (response) => {
				setTasks(response.data)
			}, () => {});
	}, [shouldNotFinish, groupId]);
	return tasks;
}
export default useLoadTasks;
