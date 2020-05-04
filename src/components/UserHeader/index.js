import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";
import useLoadUserInfo from '../../auth/useLoadUserInfo';
const UserHeader = () => {
	const classes = useStyles();
  const userInfo = useLoadUserInfo();
	return (
		<div>
	    <div className={classes.header}>
				<Avatar src={userInfo.userAvatar}/>
				<div className = {classes.name}>{userInfo.lastName + " " + userInfo.firstName}</div>


	    </div>
		</div>
	);
}

export default UserHeader;
