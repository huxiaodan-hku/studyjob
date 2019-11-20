const AuthService = {
  const login = useLoad
	isLogin = () => {
		if (localStorage.getItem(USER_NAME)) {
	    request('POST', '/userInfo', postData, (response) => {
	      if(userInfo != response.data){
	        setUserInfo(response.data);
	      }
	    }, () => {});
	  } else{
			return false;
		}

	}
}
