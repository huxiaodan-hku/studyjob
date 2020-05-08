import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root:{
	  display:'flex',
	  flexDirection:'column',
	  padding:8,
	  boxSizing:'border-box',
	  width: '20vw',
  },
  item:{
	  marginBottom: 4,
  },
  margin:{
	  width:200,
	  marginBottom: 16,
  },
  title:{
	  fontWeight:'bold',
	  marginRight:8,
	  minWidth:100,
	  fontSize:16,
	  lineHeight:2.5,
  },
   bar:{
	 display:'flex',
	 flexDirection:'row',
	 justifyContent:'space-between',
	 height:42,
	 borderBottom:1,
	 borderBottomStyle:'solid',
	 borderBottomColor:'lightgray',
 },
 label:{
	 marginLeft: 14,
 },
 tabPanel:{
   overflowY: 'scroll',
   height:'80vh',
 },
 demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export default useStyles;
