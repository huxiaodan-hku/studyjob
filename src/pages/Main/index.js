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
			<PrivateRoute path = "/main">
				<App/>
			</PrivateRoute>
		</Switch>
		</Router>
  );
}

export default Main;
