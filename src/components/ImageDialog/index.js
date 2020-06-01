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
import { DropzoneArea } from 'material-ui-dropzone';
import { ReactS3Uploader} from 'react-s3-uploader';

const ImageDialog = (props) => {
  const {open, handleClose} = props;
  const classes = useStyles();
  const groupId = useSelector(state => state.group.groupId);
  const groupUsers = useLoadGroupUsers(groupId);
  const [taskName, setTaskName]= useState("");
  const [taskDec, setTaskDec]= useState("");
  const [taskDetail, setTaskDetail]= useState("");
  const [personId, setPersonId] = React.useState([]);
  const [personNames, setPersonNames] = React.useState([]);
  const [files, setFiles] = React.useState([]);
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
    console.log(files);
  }
  const getRenderText = (selected) => {
    const items = selected.map((item)=>{return item.firstName+" "+item.lastName});
    return items.join(",");
  }
  return (<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">上传图片</DialogTitle>
    <DialogContent>
      <ReactS3Uploader
    signingUrl="/api/s3/sign"
    signingUrlMethod="GET"
    accept="image/*"
    s3path="/uploads/"
    preprocess={()=>{}}
    onSignedUrl={()=>{}}
    onProgress={()=>{}}
    onError={()=>{}}
    onFinish={()=>{}}
    signingUrlHeaders={{ additional: headers }}
    signingUrlQueryParams={{ additional: query-params }}
    signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
    contentDisposition="auto"
    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
    server="http://cross-origin-server.com"
    inputRef={cmp => this.uploadInput = cmp}
    autoUpload={true}
    />

    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        取消
      </Button>
      <Button onClick={handleSubmit} color="primary">
        上传
      </Button>
    </DialogActions>
  </Dialog>);
}

export default ImageDialog;
