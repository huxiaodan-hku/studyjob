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
      <Task imgUrl={"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
} userName={"张老师"} url={"https://www.linuxidc.com/upload/2015_05/150520100638201.jpg"} title="算法导论p100-p102" deadline="2020-04-10" assignees={"肖航",
        "张泽",
        "李俊",
        "李想",
        "陆雨涵"}/> {/*

        <MessageItem key={111} name={"张老师"} content={"大家在课余的时间阅读算法导论p100-p102， 任务已经发布"} url={"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/01/21/realtime/7364985.jpg&s=Y&x=0&y=18&sw=1239&sh=826"
      }/>
        <MessageItem key={222}content={"好的，收到"} name={"肖航"} url={"https://api.time.com/wp-content/uploads/2016/01/time-100-2016-steph-curry.jpg?quality=85&w=407"}/>

        <MessageItem key={333}content={"好的，收到"} name={"张泽"} url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bztnmoge1zmqtyjzmyy00mdhklthkzjytnzkyzdyxnta5zte0xkeyxkfqcgdeqxvynjg2njqwmdqat-v1-sy739-cr0-0-1776-739-al-1557325382.jpg?crop=0.502xw:1.00xh;0.280xw,0&resize=640:*"}/>

        */
      }

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
