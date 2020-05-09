import React, {useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {useSelector} from 'react-redux';
import useLoadGroupUsers from '../GroupList/useLoadGroupUsers';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import useStyles from './useStyles';
import request from '../../utils/JwtAjax';

const CreateTaskDialog = (props) => {
  const {open, handleClose} = props;
  const classes = useStyles();
  const groupId = useSelector(state => state.group.groupId);
  const groupUsers = useLoadGroupUsers(groupId);
  const [taskName, setTaskName]= useState("");
  const [taskDec, setTaskDec]= useState("");
  const [taskDetail, setTaskDetail]= useState("");
  const [personId, setPersonId] = React.useState([]);
  const [personNames, setPersonNames] = React.useState([]);

  const handleChange = (event) => {
    setPersonId(event.target.value);
  };
  const handleChangeMultiple = (event) => {
    const {options} = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonId(value);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const handleSubmit = () => {
    handleClose();
    alert("发布成功");
    const userIds = personId.map((user)=>{return user.userId});
    console.log(userIds);
    const postData={
      userIds: userIds,
      taskName: taskName,
      taskDec: taskDec,
      taskDetail: taskDetail,
      groupId: groupId
    }
    request('POST', '/api/createTask', postData, ()=>{

    }, null);
  }
  const getRenderText = (selected) => {
    const items = selected.map((item)=>{return item.firstName+" "+item.lastName});
    return items.join(",");
  }
  return (<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">创建新任务</DialogTitle>
    <DialogContent>
      <TextField onChange={(event) =>setTaskName(event.target.value)} autoFocus="autoFocus" margin="dense" id="name" label="任务名称" fullWidth="fullWidth" variant="outlined"/>
      <TextField onChange={(event) =>setTaskDec(event.target.value)} margin="dense" id="name" label="任务描述" fullWidth="fullWidth" multiline="multiline" rows={4} variant="outlined"/>
      <TextField onChange={(event) =>setTaskDetail(event.target.value)} margin="dense" id="name" label="详情" fullWidth="fullWidth" multiline="multiline" rows={4} variant="outlined"/>
        <FormControl fullWidth="fullWidth" className={classes.formControl}>

        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select labelId="demo-mutiple-checkbox-label" id="demo-mutiple-checkbox" multiple="multiple" value={personId} onChange={handleChange} input={<Input />} MenuProps={MenuProps} renderValue={(selected) => getRenderText(selected)}>
          {
            groupUsers.map((user) => (
              <MenuItem key={user.userId} value={user}>
              <Checkbox checked={personId.indexOf(user) > -1}/>
              <ListItemText primary={user.lastName+" "+ user.firstName}/>
            </MenuItem>))
          }
        </Select>
      </FormControl>

    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        取消
      </Button>
      <Button onClick={handleSubmit} color="primary">
        发布
      </Button>
    </DialogActions>
  </Dialog>);
}

export default CreateTaskDialog;
