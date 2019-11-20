import React, {useState, useEffect} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useLoadUserInfo} from './useLoadUserInfo';
import request from '../../utils/JwtAjax'
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 10, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 4px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([
			'width', 'margin'
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([
			'width', 'margin'
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 18
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(7)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
	},
  icon:{
    height:25,
    width:25
  }
}));
function UserPanel() {
	const userInfo = useLoadUserInfo();

	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	const name = "xiaohang";
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (<div>
		<CssBaseline/>
		<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
			<Toolbar className={classes.toolbar}>
				<IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
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
		<Drawer variant="permanent" classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
			}} open={open}>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon/>
				</IconButton>
			</div>
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
		</Drawer>
		<div className={classes.appBarSpacer}/>
	</div>);

}

export default UserPanel;
