import React, {useState} from 'react';
import useStyles from './useStyles';
import GroupList from '../GroupList';
import UserHeader from '../UserHeader';
import CreateGroupDialog from '../CreateGroupDialog';
import {useCreateGroup} from './useCreateGroup';
import Button from '@material-ui/core/Button';

const GroupPanel = props => {
	const classes = useStyles();
	const [openDialog, setOpenDialog] = React.useState(false);
	const [personName, setPersonName] = useState([]);
	const [groupName, setGroupName] = useState([]);
	const [groups, setGroups] = useState([]);
	const {userInfo} = props;

  
	const newUser = useCreateGroup(personName, groupName, setGroups);
	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};
	const handleCreate = (personName, groupName) => {
		setPersonName(personName);
		setGroupName(groupName);
		setOpenDialog(false);
	}
	return (
		<div className={classes.groupPanel}>
			<UserHeader userInfo = {userInfo}></UserHeader>
			<div className={classes.createButton}>
				<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				创建新的群组 
				</Button>
				</div>
			<GroupList groups={groups}></GroupList>
			<CreateGroupDialog openDialog={openDialog} handleClose={handleClose} handleCreate={handleCreate}/>

		</div>
	)
}

export default React.memo(GroupPanel);
