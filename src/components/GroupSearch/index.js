import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const styles = {
	searchInput: {
		height: 10,
	},
};

const GroupSearch = (props) => {
	return (
		<div className="App">
		      <TextField
		        variant="outlined"
		        InputProps={{ classes: { input: props.classes.searchInput } }}
		      />
			</div>
	);
}

export default withStyles(styles)(GroupSearch);
