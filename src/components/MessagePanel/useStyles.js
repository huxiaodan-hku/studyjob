import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	'@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
 root:{
	 boxSizing: 'border-box',
	 display: 'flex',
	 flexDirection: 'column',
	 width: "68vw",
	 justifyContent: 'space-between',
 },
 messageInputArea:{
	 marginTop: 8,
	 display: 'flex',
	 flexDirection: 'column',
 },
 messageWindow:{

	 maxHeight: 850,
	 overflowY: 'scroll',
	 height:'80vh',
 },
 hint:{
	 alignSelf: 'flex-end',
 },
 bar:{
	 height:50,
	 borderBottom:1,
	 borderBottomStyle:'solid',
	 borderBottomColor:'lightgray',
 },
 paperRoot:{
	 padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
 },
 component1:{
	 width: '100%',
	 display: 'flex',
	 flexDirection: 'column',
 }


}));

export default useStyles;
