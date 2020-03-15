import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const MessageItem = (props) => {
  const {content, url, name} = props;
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	return (
		<div className={classes.root}>
		 <div className={classes.header}>
		   <Avatar variant={"square"} src={url}/>
		   <div className={classes.name}>{name}</div>
		 </div>
		 <div className={classes.content}>
		   {content}
		 </div>
		</div>
	);
}

export default MessageItem;
