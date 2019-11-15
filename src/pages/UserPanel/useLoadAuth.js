// import React, {useState, useEffect} from 'react';
// import {ACCESS_TOKEN, USER_NAME} from '../../constants';
// import request from '../../utils/JwtAjax'
//
// const useLoadAuth = () => {
// 	const [isLogin, setIsLogin] = useState(false);
// 	const postData = {
// 		username: localStorage.getItem(USER_NAME)
// 	};
// 	useEffect(() => {
// 		const fetchAuth = () => {
// 			if (localStorage.getItem(USER_NAME)) {
// 				request('POST', '/userInfo', postData, () => {
// 					setIsLogin(true);
// 				}, () => {});
// 			}
// 		}
// 		fetchAuth();
// 	}, []);
// 	return isLogin;
// }
//
// export default useLoadAuth;
