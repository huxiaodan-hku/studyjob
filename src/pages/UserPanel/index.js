import React from 'react';
import './App.css';
import UserHeader from '../../components/UserHeader'
import GroupList from '../../components/GroupList'
import GroupSearch from '../../components/GroupSearch'
import CreateMessageInput from '../../components/GroupSearch'
import MessagesDisplay from '../../components/MessagesDisplay'

function UserPanel() {
  return (
    <main>
      <aside className = "group">
        <UserHeader/>
					<GroupSearch/>
        <GroupList/>
      </aside>
      <aside className = "menu">
      </aside>
      <section>
        <MessagesDisplay/>
        <CreateMessageInput/>
      </section>
    </main>
  );
}

export default UserPanel;
