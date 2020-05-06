import React, { useEffect } from 'react';
import Login from '../Login';
import Test from '../Test';
import App from '../UserPanel';
import SignUp from '../SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('accessToken')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

function Main() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
  		<Switch>
        <Route exact path = "/test">
          <Test/>
        </Route>
  			<Route exact path="/login">
  				<Login/>
  			</Route>
        <Route exact path = "/signup">
          <SignUp/>
        </Route>
        <PrivateRoute exact path="/main" component={App} />
        <Redirect from="*" to="/main" />
  		</Switch>
		</Router>
  );
}

export default Main;
