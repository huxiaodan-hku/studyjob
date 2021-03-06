import React, {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {useLoadUserInfo} from './useLoadUserInfo';
import GroupPanel from '../../components/GroupPanel';
import useStyles from './styles';
import WorkSpacePanel from '../../components/WorkSpacePanel';
import useGetLoginStatus from '../../utils/LoginStatus';
import MessagePanel from '../../components/MessagePanel';
import ApplicationPanel from '../../components/ApplicationPanel';

function UserPanel() {

  const classes = useStyles();
  return (localStorage.getItem("accessToken")  ? (<div className = {classes.root}>
    <GroupPanel/>
    <MessagePanel/>
    <ApplicationPanel/>
    </div>) : (<Redirect to="/login"/>)
  );

}

export default UserPanel;
