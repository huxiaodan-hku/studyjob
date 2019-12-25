import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";

const UserHeader = (props) => {
  const {userInfo} = props;
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';

	return (
		<div>
	    <div className={classes.header}>
				<Avatar src={placeholder}/>
				<div className = {classes.name}>{userInfo.username}</div>
	    </div>
		</div>
	);
}

export default UserHeader;
