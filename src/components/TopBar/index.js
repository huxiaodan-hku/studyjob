import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './useStyles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';


function TopBar(props) {
  const {openDialog, handleClose} = props;
  const classes = useStyles();
	return (<div>
    <AppBar position="absolute" className={clsx(classes.appBar, classes.appBarShift)}>
			<Toolbar className={classes.toolbar}>
				<IconButton edge="start" color="inherit" aria-label="open drawer">
					<MenuIcon/>
				</IconButton>
				<Typography component="h1" variant="h6" color="inherit" noWrap="noWrap" className={classes.title}>
					Dashboard
				</Typography>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon/>
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	</div>);
}

export default TopBar;
