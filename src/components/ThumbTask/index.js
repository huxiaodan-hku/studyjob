import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './useStyles';
import MenuItem from '@material-ui/core/MenuItem';
import useLoadFinishState from "./useLoadFinishState";
import request from '../../utils/JwtAjax';
import {useSelector} from 'react-redux';

const ThumbTask = (props) => {
  const {taskItem, imgUrl, taskDec, taskName, taskDetail, postName, posterName,postTime, messageId} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const groupId = useSelector(state => state.group.groupId);
  const initFinished = useLoadFinishState(messageId, groupId);
  const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
  const handleClose = () => {
		setAnchorEl(null);
	};
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const finishTask = () => {
    const postData = {
      messageId: messageId,
      groupId:groupId,
    }
    request('POST', '/api/finishTask', postData, (response) => {

    }, () => {});
  }

  const cancelFinishTask = (event) => {
    const messageId = event.target.value;
    const postData = {
      messageId: messageId,
      groupId:groupId,
    }
    request('POST', '/api/cancelFinishTask', postData, (response) => {

    }, () => {});
  }

  return (
    <Card  className={classes.root} variant="outlined">
      <CardHeader
        avatar={
            <Avatar variant={"square"} src={imgUrl}/>
        }
        action={
          <>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    				<MoreVertIcon/>
    			</IconButton>
    			{!initFinished && <Menu id="simple-menu" anchorEl={anchorEl} keepMounted="keepMounted" open={Boolean(anchorEl)} onClose={handleClose}>
    				<MenuItem key={messageId} onClick={finishTask}>{"标记已完成"}</MenuItem>
    			</Menu>}
          {initFinished && <Menu id="simple-menu" anchorEl={anchorEl} keepMounted="keepMounted" open={Boolean(anchorEl)} onClose={handleClose}>
    				<MenuItem key={messageId} onClick={cancelFinishTask}>{"标记未完成"}</MenuItem>
    			</Menu>}
          </>
        }
        title={posterName+ "发布了新的任务:" +taskName}
        subheader={postTime}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {taskDec}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
    {" 详情"}
        </Typography>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {taskDetail}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ThumbTask;
