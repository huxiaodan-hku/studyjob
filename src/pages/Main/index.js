import React from 'react';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
	useLocation,
	Redirect,
} from "react-router-dom";

import Login from '../Login';
import App from '../UserPanel';
import SignUp from '../SignUp';

function PrivateRoute({children, ...rest}){
	let location = useLocation();
	let isLogin = useSelector(state=>state.session.isLogin);
	return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function Main() {

  return (
		<Router>
		<Switch>
			<Route exact path="/login">
				<Login/>
			</Route>
      <Route exact path = "/signup">
        <SignUp/>
      </Route>
			<Route path = "/main">
				<App/>
			</Route>
		</Switch>
		</Router>
  );
}

export default Main;
