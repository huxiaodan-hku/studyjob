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
import request from '../../utils/JwtAjax';
import useLoadUserInfo from '../../auth/useLoadUserInfo';
import {useSelector, useDispatch} from 'react-redux';
import {ACCESS_TOKEN} from '../../constants';
import {initMessages, addMessages} from '../../store/messageReducer';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useWebSocket from 'react-use-websocket';
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import CreateTaskDialog from "../CreateTaskDialog";
const MessagePanel = (props) => {

  const inputRef = React.useRef(null);
  const [textValue, setTextValue] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const groupId = useSelector(state => state.group.groupId);
  const messages = useSelector(state => state.messages.messages);
  const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
  const [stompClient, setStompClient] = React.useState(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const handleChange = (event) => {
    setTextValue(event.target.value);
  }

  const messageReceived = (playload) => {
    ref.current.scrollIntoView({behavior: "auto", block: "end"})
    dispatch(addMessages(JSON.parse(playload.body)));
  }
  const url = "http://localhost:8080/chat";
  //connect the websocket server
  React.useEffect(() => {
    const socket = new SockJS(url);
    const initStomp = Stomp.over(socket);
    setStompClient(initStomp);
    initStomp.connect({}, function(frame) {
      console.log('Connected: ' + frame);
      //订阅message topic
      initStomp.subscribe('/topic/messages' + groupId, (message) => {
        messageReceived(message);
      });
    });
  }, [url])
  React.useEffect(() => {
    const postData = {
      groupId: groupId
    };
    if (groupId) {
      request('POST', '/api/getMessages', postData, (response) => {
        dispatch(initMessages(response.data));
      }, (error) => {
        if (!error || !error.repsonse || error.repsonse.status === 401) {
          localStorage.removeItem(ACCESS_TOKEN);
        }
      });
    }
  }, [groupId]);

  React.useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages])

  const addTask = (e) => {
    e.preventDefault();
    setDialogOpen(true);
  }

  const ref = React.useRef(null);
  const postMessage = (textValue) => {
    const postData = {
      type: 0,
      text: textValue,
      groupId: groupId
    }
    request('POST', '/api/postMessage', postData, null, null);
    // stompClient.send("/app/chat", {},
    // 							JSON.stringify(postData));
  }
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      setTextValue("");
      postMessage(textValue);
    }
  }
  const getMessages = () => {
    var res = [];
    // oldMessages.push(newMessages);
    messages.map((item) => {
      res.push(<MessageItem item={item}/>);
    })
    return res;
  }

  const handleClose = () => {
    setDialogOpen(false);
  }

  return (<div className={classes.root}>
    <div className={classes.bar}></div>
    <div className={classes.messageWindow} ref={ref}>
      {getMessages()}
    </div>
    <div className={classes.messageInputArea}>
      <Paper component="form" className={classes.paperRoot}>
        <div className={classes.component1}>
          <TextField ref={inputRef} value={textValue} onChange={handleChange} onKeyUp={handleKeyUp} fullWidth={true} id="filled-multiline-static" label="Input Message" multiline={true} rows="4" variant="outlined"/>
          <div className={classes.hint}>
            {"Return to add a new line, Shift + Return to send a message"}
          </div>
        </div>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <AddCircleOutlineIcon onClick={addTask}/>
        </IconButton>
        <Divider className={classes.divider} orientation="vertical"/>
      </Paper>

    </div>
    <CreateTaskDialog open={isDialogOpen} handleClose={handleClose}/>
  </div>);
}

export default MessagePanel;
