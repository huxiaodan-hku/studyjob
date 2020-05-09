import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import React from 'react';
const useLoadTasks = (shouldNotFinish, groupId, shouldRefresh, setShouldRefresh) => {
	const postData = {
		groupId: groupId,
		shouldNotFinish: shouldNotFinish,
	};
	const [tasks, setTasks] = React.useState([]);

	useEffect(() => {
		if(shouldRefresh){
			request('POST', '/api/getTasks', postData, (response) => {
					setTasks(response.data);
					setShouldRefresh(false);
				}, () => {});
		}
	}, [shouldNotFinish, groupId, shouldRefresh]);
	return tasks;
}
export default useLoadTasks;
