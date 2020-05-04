import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';
import {ACCESS_TOKEN} from '../../constants';

const useLoadMessages = (groupId) => {
	const [messages, setMessages] = useState([]);
  const postData = {groupId: groupId};
	useEffect(() => {
		if (groupId) {
			request('POST', '/api/getMessages', postData, (response) => {
				setMessages(response.data)
			}, (error) => {
					if(error.repsonse.status === 401){
							localStorage.remove(ACCESS_TOKEN);
					}
			});
		}
	}, [groupId]);
	return messages;
}
export default useLoadMessages;
