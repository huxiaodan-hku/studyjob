import React, {useState, useEffect} from 'react';

import {useLoadUserInfo} from './useLoadUserInfo';
import GroupPanel from '../../components/GroupPanel';
import useStyles from './styles';
import WorkSpacePanel from '../../components/WorkSpacePanel';

function UserPanel() {
	const userInfo = useLoadUserInfo();
	const classes = useStyles();
	return (<div className={classes.root}>
		<WorkSpacePanel/>
		<GroupPanel userInfo={userInfo}/>
		<div className={classes.appBarSpacer}/>
	</div>);

}

export default UserPanel;
