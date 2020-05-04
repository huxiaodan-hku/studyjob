import React from 'react';
const useGetLoginInfo = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    isLogin : false,
    accessToken : null,
  });
  const accessToken =  localStorage.getItem("accessToken");

  React.useEffect(() => {
    if (accessToken){
      setLoginInfo({isLogin : true, accessToken : accessToken });
    }
  })
  return loginInfo;
}
export default useGetLoginInfo;
