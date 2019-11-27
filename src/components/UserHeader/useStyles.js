import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
 header:{
	 padding:16,
	 display:'flex',
	 flexFlow:'flex-direction',
	 justifyContent: "flex-center",
	 alignItems: 'center',
	 height:"10vh",
	 width:drawerWidth,

 },
 icon:{
	 display:'flex',
	 width:"100%",
	 flexShrink:0
 },
 name:{
	 width:"100%",
	 flexShrink:0,
	 textAlign:"center",
 }

}));

export default useStyles;
