import React, {useState} from 'react';
import request from "../../utils/JwtAjax";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({
	component: Component,
	...rest
}) => {

	const [isLogin, setIsLogin] = useState(false);
	// Add your own authentication on the below line.
	const postData = {
		username: "123"
	};
	const [userInfo, setUserInfo] = useState({});

	request('POST', '/userInfo', postData, (response) => {
		setIsLogin(true);
	}, () => {});

	return (<Route {...rest} render={props => isLogin
			? (<Component {...props}/>)
			: (<Redirect to={{
					pathname: '/login',
					state: {
						from: props.location
					}
				}}/>)}/>)
}
export default PrivateRoute;
