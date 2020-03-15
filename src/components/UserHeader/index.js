import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";

const UserHeader = (props) => {
  const {userInfo} = props;
	const classes = useStyles();
	const placeholder = 'https://static.fzdm.com/manhua/img/2.jpg'
	return (
		<div>
	    <div className={classes.header}>
				<Avatar src={placeholder}/>
				{/*<div className = {classes.name}>{userInfo.username}</div>*/}
				<div className = {classes.name}>{"xiaohang"}</div>

				
	    </div>
		</div>
	);
}

export default UserHeader;
