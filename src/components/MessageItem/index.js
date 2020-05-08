import React from 'react';
import axios from 'axios';
import useStyles from './useStyles';
import {Avatar} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Task from '../Task';
const MessageItem = (props) => {
	const {item} = props;
	const classes = useStyles();
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	if (item) {
		if (item.type === 0) {
			return (<div className={classes.root}>
				<div className={classes.header}>
					<Avatar variant={"square"} src={item.posterUrl}/>
					<div className={classes.name}>{item.posterName}</div>
					<div className={classes.postDate}>{item.postDate}</div>
				</div>
				<div className={classes.content}>
					{item.text}
				</div>
			</div>);
		} else {
			return (<Task
				postTime={item.postDate}
				imgUrl={item.posterUrl}
				taskDec={item.taskDec}
				posterName={item.posterName}
				taskDetail={item.taskDetail}
				taskName={item.taskName}/>)
		}

	} else {
		return <div></div>;
	}
}

export default MessageItem;
