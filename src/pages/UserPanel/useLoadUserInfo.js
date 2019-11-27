import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';

const useLoadUserInfo = () => {
	const postData = {
		username: localStorage.getItem("username")
	};
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		if (localStorage.getItem("username")) {
			request('POST', '/userInfo', postData, (response) => {
				setUserInfo({...userInfo, username:response.data.userName})
			}, () => {});
		}
	}, []);
	return userInfo;
}
export {useLoadUserInfo};
