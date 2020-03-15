import { makeStyles } from "@material-ui/core";

const groupWidth = "12vw";
const useStyles = makeStyles(theme => ({
  root:{
	  color: '#1976d2',
	  width: groupWidth,
	  borderRightStyle: 'solid',
	  height: '100vh',
	  borderColor: 'lightgray',
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
  groupPanel:{
	  backgroundColor: "#009688",
	  width: groupWidth,
	  borderRightStyle: 'solid',
	  height: '100vh',
	  color: 'lightgray',
	  borderRightWidth: 2,
  },
  labelText: {
	  color: 'white',
  },
  createButton:{
	  marginTop:16,
	  marginLeft: 32,
  }
}))

export default useStyles;
