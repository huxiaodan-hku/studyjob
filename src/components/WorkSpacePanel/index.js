import React, {useRef, useState}  from 'react';
import useStyles from './useStyles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import request from '../../utils/JwtAjax';
import CircularProgress from '@material-ui/core/CircularProgress';
import useLoadWorkSpaceSearchResult from './useLoadWorkSpaceSearchResult';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const WorkSpacePanel = props => {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const inputWorkspaceId = React.createRef();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cursor, setCursor] = useState(0);
  
  const handleCreateWorkspace = () => {
	  alert(value);
	  let postData = {
		  userAccount:localStorage.getItem("username"),
		  workspaceName:value,
	  }
	  request('POST', '/createWorkspace', postData, (response) => {
	     alert(response.data.id);
	  }, () => {});
  }
  
  const changeValue = (event) => {
	  setValue(event.target.value);
	  setIsLoading(true);
  }
  const workspaceList = null;
  //const workspaceList = useLoadWorkSpaceSearchResult(setIsLoading,value,cursor).workspaceList;
  
  return (
    <div className={classes.root}>
	  <div className = {classes.workspaceLabel}>
        <span className = {classes.labelText}>Worksapce</span>
	  </div>
	  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          加入已有的工作空间
        </DialogTitle>
        <DialogContent dividers>
          <TextField onChange={(e) => changeValue(e)} classes = {{root:classes.inputWidth}} id="standard-basic" label="空间名称" />
		  {isLoading ? <CircularProgress/> : 
		  <div>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {workspaceList && workspaceList.map(workspace => (
            <TableRow key={workspace.id}>
              <TableCell component="th" scope="row">
                {workspace.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
		  </div>}
		</DialogContent>
        <DialogActions>
		  <Button autoFocus onClick={handleCreateWorkspace} color="primary">
            新的工作空间
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            确认
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default React.memo(WorkSpacePanel);
