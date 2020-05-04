import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
 root:{
	 boxSizing: 'border-box',
	 padding: 16,
	 display: 'flex',
	 flexDirection: 'column',
	 width: "100%",
	 justifyContent: 'space-between',
 },
 name:{
	 fontSize: 14,
	 marginLeft: 16,
	 fontWeight:'bold',
	 lineHeight: 3,
 },
 header:{
	 display:'flex',
	 flexDirection: 'row',
 },
 content:{
	 marginTop:4,
	 fontSize:12,
 },
 postDate:{
   color: 'darkcyan',
   fontSize: 12,
   marginLeft:16,
   lineHeight: 3.6,
 }

}));

export default useStyles;
