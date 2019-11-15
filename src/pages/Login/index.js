import React, {useState} from 'react';
// import './Login.css';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './styles';
import {withStyles} from "@material-ui/core/styles";
import {useDispatch} from 'react-redux';
import {updateJwtToken} from '../../store/sessionReducer';
import { ACCESS_TOKEN, USER_NAME } from '../../constants';

import { Redirect} from "react-router-dom";
const Login = (props) => {
	const {classes} = props
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
	const clickSignIn = () => {
		const postData = {
			username: username,
			password: password
		}
		axios.post("http://localhost:8080/login", postData).then((response) => {
			if (response.data.responseStatus === 'ERROR') {
				alert(response.data.responseMessage);
			} else {
        setIsLogin(true);
				localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
        localStorage.setItem(USER_NAME, username);
			}
		}).catch(error => {
			alert("The email or password is not correct");
		});
	}

	return (
    isLogin ? <Redirect to="/main"/> :
    <Container component="main" maxWidth="xs">
		<CssBaseline/>
		<div className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon/>
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<div className={classes.form} noValidate="noValidate">
				<TextField onChange={event => setUsername(event.target.value)} variant="outlined" margin="normal" required="required" fullWidth="fullWidth" id="email" label="Email Address" name="email" autoComplete="email" autoFocus="autoFocus"/>
				<TextField onChange={event => setPassword(event.target.value)} variant="outlined" margin="normal" required="required" fullWidth="fullWidth" name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
				<FormControlLabel control={<Checkbox value = "remember" color = "primary" />} label="Remember me"/>
				<Button onClick={clickSignIn} type="submit" fullWidth="fullWidth" variant="contained" color="primary" className={classes.submit}>
					Sign In
				</Button>
				<Grid container="container">
					<Grid item="item" xs="xs">
						<Link href="#" variant="body2">
							Forgot password?
						</Link>
					</Grid>
					<Grid item="item">
						<Link href="/signup" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</div>
		</div>
	</Container>);
}

export default withStyles(styles)(Login);
