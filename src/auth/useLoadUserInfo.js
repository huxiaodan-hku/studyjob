import React from 'react';
import request from '../utils/JwtAjax';
const useLoadUserInfo = () => {
  const [userInfo, setUserInfo] = React.useState({});
  React.useEffect(() => {
    request('POST', '/api/getUserInfo', null, (response) => {
      setUserInfo(response.data);
    }, () => {});
  }, [])
  return userInfo;
}
export default useLoadUserInfo;
