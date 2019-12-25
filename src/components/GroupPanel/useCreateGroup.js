import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';

const useCreateGroup = (personName, groupName,setGroups) => {
	const postData = {
		members: personName,
		groupName:groupName
	};
	const [group, setGroup] = useState({
		personName:personName,
		groupName:groupName,
		groupId:'',
		creator:'',

	});
	useEffect(() => {
			request('POST', '/createGroup', postData, (response) => {
				setGroup({...group,groupId:response.data.groupId})
				setGroups(groups=>groups.push(groupName))

			}, () => {});

	}, [personName, groupName]);
	return group;
}
export {useCreateGroup};
