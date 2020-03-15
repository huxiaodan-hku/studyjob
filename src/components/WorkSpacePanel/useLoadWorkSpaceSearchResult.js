import axios from "axios";
import {useEffect, useState} from 'react';
import request from '../../utils/JwtAjax';

const useLoadWorkSpaceSearchResult = (setIsLoading,value,cursor) => {
	const postData = {
		token:value,
		cursor:cursor
	};
	const [workSpaceList, setWorkSpaceList] = useState({});
	useEffect(() => {
			request('POST', '/searchWorkSpace', postData, (response) => {
				let res = {
					list:response.data.workSpaceList,
				    cursor:response.data.cursor,
				}
				setWorkSpaceList(res);
				setIsLoading(false);
			}, () => {});

	}, [value, cursor, setIsLoading]);
	return workSpaceList;
}
export default useLoadWorkSpaceSearchResult;