import React from 'react';
import style from './index.module.css';

const GroupList = () => {
	const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
	const name = "xiaohang";
	return (

		<ul className={style.component} >
			<li>2017级计科1班</li>
			<li>2016级计科2班</li>
			<li>2018级计科3班</li>
			<li>2019级计科4班</li>
		</ul>
	);
}

export default GroupList;
