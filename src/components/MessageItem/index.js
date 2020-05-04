import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const MessageItem = (props) => {
	const {item} = props;
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	if (item) {
		return (<div className={classes.root}>
			<div className={classes.header}>
				<Avatar variant={"square"} src={item.posterUrl}/>
				<div className={classes.name}>{item.posterName}</div>
				<dov className={classes.postDate}>{item.postDate}</dov>
			</div>
			<div className={classes.content}>
				{item.text}
			</div>
		</div>);
	}else {
    return <div></div>;
  }
}

export default MessageItem;
