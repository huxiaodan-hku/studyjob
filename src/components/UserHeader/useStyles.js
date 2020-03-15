import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
 header:{
	 boxSizing: 'border-box',
	 padding:16,
	 display:'flex',
	 flexFlow:'flex-direction',
	 justifyContent: "flex-center",
	 alignItems: 'center',
	 height:'5vh',
	 width:"100%",
	 borderBottomStyle: 'solid',
	  borderColor: 'lightgray',
	  borderBottomWidth: 2,

 },
 icon:{
	 display:'flex',
	 width:"100%",
	 flexShrink:0
 },
 name:{
	 marginRight:8,
	 color:'white',
	 width:"100%",
	 flexShrink:0,
	 textAlign:"center",
 }

}));

export default useStyles;
