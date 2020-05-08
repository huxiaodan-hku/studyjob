import React, {useState} from 'react';
import useStyles from './useStyles';
import Button from '@material-ui/core/Button';
import {createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {green, purple} from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import useLoadTasks from './useLoadTasks';
import {useSelector} from 'react-redux';
import ThumbTask from '../ThumbTask';
import {ACCESS_TOKEN} from '../../constants';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#009688'
		}
	}
});

function a11yProps(index) {
	return {id: `full-width-tab-${index}`};
}

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: 'none',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(4),
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		'&:hover': {
			color: '#40a9ff',
			opacity: 1
		},
		'&$selected': {
			color: '#1890ff',
			fontWeight: theme.typography.fontWeightMedium
		},
		'&:focus': {
			color: '#40a9ff'
		}
	},
	selected: {}
}))((props) => <Tab disableRipple="disableRipple" {...props}/>);

const AntTabs = withStyles({
	root: {
		borderBottom: '1px solid #e8e8e8'
	},
	indicator: {
		backgroundColor: '#1890ff'
	}
})(Tabs);

function TabPanel(props) {
	const {
		children,
		value,
		index,
		...other
	} = props;

	return (<div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
		{
			value === index && (<Box p={3}>
				<Typography>{children}</Typography>
			</Box>)
		}
	</div>);
}

const ApplicationPanel = props => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
  const groupId = useSelector(state => state.group.groupId);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	React.useEffect(() => {})

	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};
  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  const allTasks = useLoadTasks(false, groupId);
  const notFinishedTasks = useLoadTasks(true, groupId);

	return (<div className={classes.root}>
		<div className={classes.bar}>
			<div className={classes.title}>任务发布系统</div>
			<InputBase className={classes.input} placeholder="搜索所有任务" inputProps={{
					'aria-label' : 'search google maps'
				}}/>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon/>
			</IconButton>
			<Divider className={classes.divider} orientation="vertical"/>

			<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				<MoreVertIcon/>
			</IconButton>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted="keepMounted" open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</div>

		<div className={classes.content}>
			<div className={classes.demo1}>
				<AntTabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" aria-label="full width tabs example">
					<AntTab label="未完成任务" {...a11yProps(0)}/>
					<AntTab label="全部任务" {...a11yProps(1)}/>
				</AntTabs>
			</div>
			<SwipeableViews axis={theme.direction === 'rtl'
					? 'x-reverse'
					: 'x'} index={value} onChangeIndex={handleChangeIndex}>
				<TabPanel className={classes.tabPanel}value={value} index={0} dir={theme.direction}>
					{notFinishedTasks.map(task=>{
            return (<ThumbTask
      				postTime={task.postDate}
      				imgUrl={task.posterUrl}
      				taskDec={task.taskDec}
      				posterName={task.posterName}
      				taskDetail={task.taskDetail}
      				taskName={task.taskName}
              messageId={task.messageId}/>)
          })}
				</TabPanel>
				<TabPanel className={classes.tabPanel} value={value} index={1} dir={theme.direction}>
					{allTasks.map(task=>{
            return (<ThumbTask
      				postTime={task.postDate}
      				imgUrl={task.posterUrl}
      				taskDec={task.taskDec}
      				posterName={task.posterName}
      				taskDetail={task.taskDetail}
      				taskName={task.taskName}
              messageId={task.messageId}/>)
          })}
				</TabPanel>
			</SwipeableViews>

		</div>

	</div>)
}

export default React.memo(ApplicationPanel);
