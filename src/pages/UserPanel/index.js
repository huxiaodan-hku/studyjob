import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {useLoadUserInfo} from './useLoadUserInfo';
import GroupPanel from '../../components/GroupPanel';
import useStyles from './styles';
import WorkSpacePanel from '../../components/WorkSpacePanel';
import useGetLoginStatus from '../../utils/LoginStatus';
function UserPanel() {
	const isLogin = useGetLoginStatus();
	const userInfo = useLoadUserInfo();
	const classes = useStyles();
	return isLogin ? (<div className={classes.root}>
		<WorkSpacePanel/>
		<GroupPanel userInfo={userInfo}/>
		<div className={classes.appBarSpacer}/>
	</div>) : <Redirect to = "/login"/>;

}

export default UserPanel;
