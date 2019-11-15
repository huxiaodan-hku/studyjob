import {ACCESS_TOKEN} from '../../constants';
import axios from "axios";

const request = (requestMethod, url, postData, successCallBack, errorCallBack) => {

	if (localStorage.getItem(ACCESS_TOKEN)) {

		const requestOptions = {
			method: requestMethod,
			url: url,
			data: postData,
			headers:{
				'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
				'Accept' : 'application/json',
	      'Content-Type': 'application/json'
			}
		}

		axios(requestOptions).then((response) => {
			successCallBack(response);
		}).catch(error => {
			errorCallBack(error);
		});
	}

};

export default request;
