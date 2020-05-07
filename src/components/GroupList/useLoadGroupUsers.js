import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import {ACCESS_TOKEN} from '../../constants';

const useLoadGroupUsers = (groupId) => {
	const [groupUsers, setGroupUsers] = useState([]);
  const postData = {groupId: groupId};
	useEffect(() => {
		if (groupId) {
			request('POST', '/api/getGroupUsers', postData, (response) => {
				setGroupUsers(response.data)
			}, (error) => {
					if(error.repsonse.status === 401){
							localStorage.remove(ACCESS_TOKEN);
					}
			});
		}
	}, [groupId]);
	return groupUsers;
}
export default useLoadGroupUsers;
