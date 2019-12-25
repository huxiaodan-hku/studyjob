import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root:{
	  width: '10vw',
	  borderRightStyle: 'solid',
	  height: '100vh',
	  color: 'lightgray',
	  borderRightWidth: 2,
  },
  workspaceLabel:{
	  width: '100%',
	  height:50,
	  padding:8,
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  boxSizing: 'border-box',
	  borderBottomStyle: 'solid',
	  borderColor: 'lightgray',
	  borderBottomWidth: 2,
  },
  labelText: {
	  color: 'gray',
  }
}))

export default useStyles;
