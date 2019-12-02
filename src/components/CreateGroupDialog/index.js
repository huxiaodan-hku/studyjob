import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './useStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import UserSelectDialog from '../UserSelectDialog';
import Select from '@material-ui/core/Select';
import {useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const drawerWidth = 240;

const CreateGroupDialog = (props) => {
	const {openDialog, handleClose, handleCreate} = props;
	const classes = useStyles();

	const names = [
		'xiaohang',
		'huxiaodan',
		'test01',
		'test02',
		'test03',
		'test04',
		'test05'
	];

	const [personName, setPersonName] = React.useState([]);
  const [groupName, setGroupName] = React.useState([]);

	const theme = useTheme();

	function getStyles(name, personName, theme) {
		return {
			fontWeight: personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium
		};
	}

	const handleChange = event => {
		setPersonName(event.target.value);
	};

  const handleGroupNameChange = event => {
    setGroupName(event.target.value);
  }
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

	return (<div>
		<Dialog maxWidth='xl' open={openDialog} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">创建新的聊天群</DialogTitle>
			<DialogContent>
				<div>
					<OutlinedInput id="outlined-adornment-amount" placeholder={"名称"} onChange={handleGroupNameChange}/>
				</div>
				<div className = {classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
            <Select className = {classes.selector} labelId="demo-mutiple-name-label" id="demo-mutiple-name" placeholder={"用户邮箱"}
              multiple="multiple" value={personName} onChange={handleChange} input={<Input />} MenuProps={MenuProps}>
  						{
  							names.map(name => (<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
  								{name}
  							</MenuItem>))
  						}
  					</Select>
				</div>

			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					取消
				</Button>
				<Button onClick={()=>handleCreate(personName, groupName)} color="primary">
					创建
				</Button>
			</DialogActions>
		</Dialog>
	</div>);

}

export default CreateGroupDialog;
