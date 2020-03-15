import {useEffect, useState} from 'react';

const useGetLoginStatus = () => {
  const [login, setLogin] = useState(true);
  const username = localStorage.getItem("username");
	useEffect(() => {
		if (!localStorage.getItem("username")) {
			setLogin(false);
		}
	}, [username]);
	return login;
}
export default useGetLoginStatus;
