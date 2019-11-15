import React, {useState, useEffect} from 'react';
import './App.css';
import UserHeader from '../../components/UserHeader'
import GroupList from '../../components/GroupList'
import GroupSearch from '../../components/GroupSearch'
import CreateMessageInput from '../../components/GroupSearch'
import MessagesDisplay from '../../components/MessagesDisplay'
import {Redirect} from "react-router-dom";
import useLoadAuth from "./useLoadAuth";

import {ACCESS_TOKEN, USER_NAME} from '../../constants';
import request from '../../utils/JwtAjax'

function UserPanel() {
  const postData = {
    username: localStorage.getItem(USER_NAME)
  };
  const [userInfo, setUserInfo] = useState({});

  if (localStorage.getItem(USER_NAME)) {
    request('POST', '/userInfo', postData, (response) => {
      setUserInfo(response.data);
    }, () => {});
  }

	return (
		localStorage.getItem(USER_NAME)
		? (<main>
			<aside className="group">
				<UserHeader userInfo={userInfo}/>
				<GroupSearch/>
				<GroupList/>
			</aside>
			<aside className="menu"></aside>
			<section>
				<MessagesDisplay/>
				<CreateMessageInput/>
			</section>
		</main>): (<Redirect to="/login"/>));
}

export default UserPanel;
