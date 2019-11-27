import React, {useState, useEffect} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import GroupList from '../../components/GroupList';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useLoadUserInfo} from './useLoadUserInfo';
import request from '../../utils/JwtAjax'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateGroupDialog from '../../components/CreateGroupDialog';
import TopBar from '../../components/TopBar';
import UserHeader from '../../components/UserHeader';

import useStyles from './styles';

function UserPanel() {
	const userInfo = useLoadUserInfo();

	const classes = useStyles();
	const [openDialog, setOpenDialog] = React.useState(false);
	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};
	return (<div>
		<CssBaseline/>
		<TopBar/>
		<Drawer variant="permanent" classes={{
				paper: clsx(classes.drawerPaper)
			}}>
			<UserHeader userInfo = {userInfo}></UserHeader>
			<GroupList></GroupList>
		</Drawer>
		<div className={classes.appBarSpacer}/>
		<Button variant="outlined" color="primary" onClick={handleClickOpen}>
			Open form dialog
		</Button>
		<CreateGroupDialog openDialog={openDialog} handleClose={handleClose}/>
	</div>);

}

export default UserPanel;
