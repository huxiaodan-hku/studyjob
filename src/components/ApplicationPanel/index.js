import React, {useState} from 'react';
import useStyles from './useStyles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import MessageItem from '../../components/MessageItem';
import ThumbTask from '../../components/ThumbTask';

const theme = createMuiTheme({
  palette: {
    primary: {
		main:'#009688',
	},
  },
});

const ApplicationPanel = props => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	  const handleClick = event => {
		setAnchorEl(event.currentTarget);
	  };

	  const handleClose = () => {
		setAnchorEl(null);
	  };
	
	return (
		<div className={classes.root}>
		<div className={classes.bar}>
		   <div className={classes.title}>任务发布系统</div>
			  <InputBase
				className={classes.input}
				placeholder="搜索所有任务"
				inputProps={{ 'aria-label': 'search google maps' }}
			  />
			  <IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			  </IconButton>
			  <Divider className={classes.divider} orientation="vertical" />
			  
		   <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				<MoreVertIcon />			
          </IconButton>		
			<Menu
			  id="simple-menu"
			  anchorEl={anchorEl}
			  keepMounted
			  open={Boolean(anchorEl)}
			  onClose={handleClose}
			>
			  <MenuItem onClick={handleClose}>Profile</MenuItem>
			  <MenuItem onClick={handleClose}>My account</MenuItem>
			  <MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
		{/*
		<ThemeProvider theme={theme}>
			<Button variant="contained" color="primary" className={classes.margin}>
          发布新任务
        </Button>
		</ThemeProvider>
		<ThemeProvider theme={theme}>
			<Button variant="contained" color="primary" className={classes.margin}>
          点名
        </Button>
		</ThemeProvider>
		*/}
		<div className={classes.content}>
		
			<ThumbTask 
			    imgUrl={"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
}
                userName={"张老师"}
			    url={"https://www.linuxidc.com/upload/2015_05/150520100638201.jpg"}
				title="算法导论p100-p102"
				deadline="2020-04-10"
				assignees={"肖航", "张泽", "李俊", "李想", "陆雨涵"}/>
			<div className={classes.label}>已完成</div>
			<div>
				<MessageItem 
				name={"张三"}
				url={
			  "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
			  }/>
			  <MessageItem 
				name={"肖航"}
				url={"https://api.time.com/wp-content/uploads/2016/01/time-100-2016-steph-curry.jpg?quality=85&w=407"}/>
				
			 <MessageItem 
				name={"张泽"}
				url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bztnmoge1zmqtyjzmyy00mdhklthkzjytnzkyzdyxnta5zte0xkeyxkfqcgdeqxvynjg2njqwmdqat-v1-sy739-cr0-0-1776-739-al-1557325382.jpg?crop=0.502xw:1.00xh;0.280xw,0&resize=640:*"}/>
			</div>
			<br/>
			
			<div className={classes.label}>未完成</div>
			<div>
				<MessageItem 
				name={"李四"}
				url={"https://ib2.hulu.com/user/v3/artwork/c8b9c799-b81e-4522-a05b-40212f69e7a6?base_image_bucket_name=image_manager&base_image=e106c7da-04b1-4495-ae8c-405ca0b43a9d&size=1422x800&format=jpeg"
			  }/>
			  <MessageItem 
				name={"王五"}
				url={"data:image/jpeg;base64,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"}/>
			</div>
			<br/>

		</div>
          
		</div>
	)
}

export default React.memo(ApplicationPanel);
