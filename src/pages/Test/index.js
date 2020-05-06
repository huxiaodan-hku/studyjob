import React, {useState} from 'react';
import SockJS from "sockjs-client"
import Stomp from "stompjs"
const Test = (props) => {
  const [stompClient, setStompClient] = React.useState(null);
	const handleClick = () => {
		stompClient.send("/app/chat", {},
                  JSON.stringify({'from':"from", 'text':"text"}));
	}
	const url = "http://localhost:8080/chat";
  //connect the websocket server
	const messageReceived = (message) => {
		alert(message.body);
	}
  React.useEffect(() => {
    const socket = new SockJS(url);
    const initStomp = Stomp.over(socket);
		setStompClient(initStomp);
    initStomp.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        //订阅message topic
				initStomp.subscribe('/topic/messages', (message) => {
					messageReceived(message);
				});
    });
  }, [url])

  return (
		<div><button onClick={handleClick}>send message</button></div>
  );
}
export default Test;
