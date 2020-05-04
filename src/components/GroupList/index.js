import React, {useState} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './useStyles';
import axios from 'axios';
import useLoadGroups from './useLoadGroups';

const GroupList = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const placeholder = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png';
  const handleClick = () => {
    setOpen(!open);
  };
  const groups = useLoadGroups();

  const handleClickGroup = (e) => {
    if(e.target){
      const groupId = e.target.parentElement.getAttribute("id-index");
      alert(groupId);
    }
  }

  return (<>
		<ListItem>
			<div className = {classes.listAll} button onClick = {handleClick}>
		  {open ? <ExpandMore className={classes.icon}/> : <ChevronRight className={classes.icon}/>}
      <ListItemText primary = "讨论组" className = {classes.listItemText}/>
			</div>
      <IconButton aria-label="add" color="primary">
        <AddIcon classes={{hover: classes.addIconHover, root:classes.addIconRoot}} />
      </IconButton>
    </ListItem>
    {/*<CreateGroupDialog openDialog={openDialog} handleClose={handleClose} handleCreate={handleCreate}/>*/}
    <Collapse in={open} timeout="auto" unmountOnExit="unmountOnExit">
      <List component="div" disablePadding="disablePadding">
        {groups.map(item=>{
          return (<ListItem id-index={item.groupId} onClick={handleClickGroup} button="button">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={item.groupName}/>
          </ListItem>)
        })}
      </List>
    </Collapse>
</>);
}

export default GroupList;
