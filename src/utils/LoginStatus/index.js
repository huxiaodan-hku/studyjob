import {useEffect, useState} from 'react';

const useGetLoginStatus = () => {
  const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("username")) {
			setIsLogin(true);
		}
	}, []);
	return isLogin;
}
export default useGetLoginStatus;
