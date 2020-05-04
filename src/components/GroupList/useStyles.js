import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  icon: {
    height: 25,
    width: 25
  },
	addIconRoot: {
		color: 'white',
	},
  addIconHover:{
    color: 'black',
  },
  listAll:{
    display: 'flex',
    flexDirection: 'row',
  },
  icon:{
    marginTop:3,
  }


}));
export default useStyles;
