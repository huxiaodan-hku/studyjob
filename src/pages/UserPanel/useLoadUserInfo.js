import {ACCESS_TOKEN, USER_NAME} from '../../constants';
import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';

const useLoadUserInfo = () => {
	const postData = {
		username: localStorage.getItem(USER_NAME)
	};
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		if (localStorage.getItem(USER_NAME)) {
			request('POST', '/userInfo', postData, (response) => {
				setUserInfo(response.data);
			}, () => {});
		}
	}, [USER_NAME]);
	return userInfo;
}
export {
  useLoadUserInfo
};
