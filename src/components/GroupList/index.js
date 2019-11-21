import React, {useState} from 'react';
import style from './index.module.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	icon:{
		height:25,
		width:25
	}

}));
const GroupList = () => {
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	return (
		<div>
			<List >
				<ListItem button="button">
					<ListItemIcon>
					</ListItemIcon>
					<ListItemText primary="Dashboard"/>
				</ListItem>
				<ListItem button="button">
					<ListItemIcon>
            <img className = {classes.icon} src={placeholder}/>
					</ListItemIcon>
					<ListItemText primary="Orders"/>
				</ListItem>
				<ListItem button="button">
					<ListItemIcon>
					</ListItemIcon>
					<ListItemText primary="Customers"/>
				</ListItem>
				<ListItem button="button">
					<ListItemIcon>
					</ListItemIcon>
					<ListItemText primary="Reports"/>
				</ListItem>
				<ListItem button="button">
					<ListItemIcon>
					</ListItemIcon>
					<ListItemText primary="Integrations"/>
				</ListItem>
			</List>
		</div>
	);
}

export default GroupList;
