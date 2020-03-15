import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import MessageItem from '../../components/MessageItem';
import Task from '../../components/Task';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MessagePanel = (props) => {
  const {userInfo} = props;
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	return (
		<div className={classes.root}>
		  <div className={classes.bar}>
			
		  </div>
	       <div className={classes.messageWindow}>
			  <MessageItem 
				name={"张老师"}
				content={"大家在课余的时间阅读算法导论p100-p102， 任务已经发布"} 
				url={
			  "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
			  }/>
			  <MessageItem 
				content={"好的，收到"} 
				name={"肖航"}
				url={"https://api.time.com/wp-content/uploads/2016/01/time-100-2016-steph-curry.jpg?quality=85&w=407"}/>
				
			 <MessageItem 
				content={"好的，收到"} 
				name={"张泽"}
				url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bztnmoge1zmqtyjzmyy00mdhklthkzjytnzkyzdyxnta5zte0xkeyxkfqcgdeqxvynjg2njqwmdqat-v1-sy739-cr0-0-1776-739-al-1557325382.jpg?crop=0.502xw:1.00xh;0.280xw,0&resize=640:*"}/>
		     <Task 
			    imgUrl={"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
}
                userName={"张老师"}
			    url={"https://www.linuxidc.com/upload/2015_05/150520100638201.jpg"}
				title="算法导论p100-p102"
				deadline="2020-04-10"
				assignees={"肖航", "张泽", "李俊", "李想", "陆雨涵"}/>
		   </div>
		   <div className={classes.messageInputArea}>
		   
			   <TextField
				  fullWidth="true"
				  id="filled-multiline-static"
				  label="Input Message"
				  multiline
				  rows="4"
				  variant="outlined"
				/>
				<div className={classes.hint}>
				  {"Return to add a new line, Shift + Return to send a message"}
				</div>
		</div>
		   
		</div>
	);
}

export default MessagePanel;
