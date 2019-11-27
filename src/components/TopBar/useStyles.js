import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([
			'width', 'margin'
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([
			'width', 'margin'
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	appBarSpacer: theme.mixins.toolbar,
	toolbar: {
		paddingRight: 10, // keep right padding when drawer closed
	},
	menuButton: {
		marginRight: 18
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
}));

export default useStyles;
