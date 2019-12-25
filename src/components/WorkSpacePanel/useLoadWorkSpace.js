import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';

const useLoadWorkSpace = (personName, groupName,setGroups) => {
	const postData = {
		userName:userName
	};
	const [workSpaceList, setWorkSpaceList] = useState({
		[]
	});
	useEffect(() => {
			request('POST', '/loadWorkSpace', postData, (response) => {
				

			}, () => {});

	}, [userName]);
	return workSpaceList;
}
export {useLoadWorkSpace};