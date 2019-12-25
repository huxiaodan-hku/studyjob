import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
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
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	
}));

export default useStyles;
