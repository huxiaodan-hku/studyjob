import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import useLoadUserInfo from '../../auth/useLoadUserInfo';
import {ACCESS_TOKEN} from '../../constants';

const useLoadGroups = () => {
	const currentUser = useLoadUserInfo();
	const [useGroups, setUserGroups] = useState([]);
  const postData = {userId: currentUser.userId};
	useEffect(() => {
		if (currentUser.userId) {
			request('POST', '/api/getGroups', postData, (response) => {
				setUserGroups(response.data)
			}, (error) => {
					if(error.repsonse.status === 401){
							localStorage.remove(ACCESS_TOKEN);
					}
			});
		}
	}, [currentUser]);
	return useGroups;
}
export default useLoadGroups;
