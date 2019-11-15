import React from 'react';
import style from './index.module.css';
import axios from 'axios';

const UserHeader = (props) => {
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	const name = "xiaohang";
  const {userInfo} = props;
	return (
		<div>
		<header className={style.component}>
	    <img src={placeholder} alt={name} />
	    <div>
	      <h3>{userInfo.userName}</h3>
	    </div>
	  </header>
		</div>
	);
}

export default UserHeader;
