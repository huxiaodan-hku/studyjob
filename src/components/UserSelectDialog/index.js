import React from 'react';
import {
  Dialog, IconButton, Button, Table, TableHead, TableBody,
  TableRow, TableCell, CircularProgress
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import useStyles from './useStyles';
import cx from 'classnames';
import axios from 'axios';
// import ProjectRow from './ProjectRow';

const LoadStatus = {
  LOADED: 'loaded',
  LOADING: 'loading',
  LOAD_MORE: 'load-more',
}

const PAGE_SIZE = 10;

const UserSelectDialog = props => {
  const classes = useStyles();
  const { open, onConfirm, onCancel } = props;
  const [query, setQuery] = React.useState('');
  const [projects, setProjects] = React.useState([]);
  const [checkedProjects, setCheckedProjects] = React.useState([]);
  const [loadStatus, setLoadStatus] = React.useState(LoadStatus.LOADING);
  const [searchAjax, setSearchAjax] = React.useState(axios.CancelToken.source);
  const [loadMoreAjax, setLoadMoreAjax] = React.useState(axios.CancelToken.source);
  const [noMoreResult, setNoMoreResult] = React.useState(false);
  const checkedProjectIdSet = React.useMemo(() => new Set(checkedProjects.map(project => project.id)), [checkedProjects]);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    setLoadStatus(LoadStatus.LOADED);
  }, [query, searchAjax.token, open]);

  const handleConfirm = React.useCallback(() => {

  }, [])

  const handleCancel = React.useCallback(() => {

  }, []);

  const clearData = React.useCallback(() => {
    setQuery('');
    setProjects([]);
    setCheckedProjects([]);
    searchAjax.cancel();
    setSearchAjax(axios.CancelToken.source);
    loadMoreAjax.cancel();
    setLoadMoreAjax(axios.CancelToken.source);
    setLoadStatus(LoadStatus.LOADING);
    setNoMoreResult(false);
  }, [searchAjax, loadMoreAjax])

  const onInput = (event) => {
    // searchAjax.cancel();
    // loadMoreAjax.cancel();
    // setSearchAjax(axios.CancelToken.source);
    // setQuery(event.target.value);
  }

  const onScroll = (event) => {

  }

  const onToggleAvatar = React.useCallback(project => {
    if (checkedProjectIdSet.has(project.id)) {
      setCheckedProjects(checkedProjects.filter(p => p.id !== project.id));
    } else {
      setCheckedProjects([...checkedProjects, project])
    }
  }, [checkedProjects, checkedProjectIdSet]);

  const buildTitle = () => {
    return (
      <div className={classes.titleArea}>
        <span className={classes.title}>{"选择project"}</span>
        <IconButton className={classes.closeButton} onClick={handleCancel}>
          <CloseIcon />
        </IconButton>
      </div>
    )
  }

  const buildTableHeader = () => {
    return (
      <Table>
        <TableHead>
          <TableRow className={classes.headRow}>
            <TableCell className={cx(classes.headCell, classes.avatarColumn)}>{' '}</TableCell>
            <TableCell className={cx(classes.headCell, classes.nameColumn)}>{"project name"}</TableCell>
            <TableCell className={cx(classes.headCell, classes.descColumn)}>{'timeline.description'}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    )
  }

  const buildTableBody = () => {
    return (
      <div className={classes.tableBodyWrapper} onScroll={onScroll}>
        <Table>
          <TableBody className={classes.body}>
            {
								<li>sdfsdf</li>
            }
          </TableBody>
        </Table>
        {
          loadStatus === LoadStatus.LOAD_MORE &&
          <div className={classes.loadMore}><CircularProgress size={32} /></div>
        }
      </div>
    )
  }

  const buildTable = () => {
    return (
      <>
        {
          projects.length > 0 &&
          <>
            {buildTableHeader()}
            {buildTableBody()}
          </>
        }
        {
          projects.length === 0 &&
          <div className={classes.noResult}>{'timeline.no_searched_result'}</div>
        }
      </>
    )
  }

  const buildContent = () => {
    return (
      <div className={classes.contentArea}>
        <div className={classes.query}>
          <i className={cx(classes.queryIcon, 'icon-wap-collabo_search')}></i>
          <input className={classes.queryInput} value={query} onChange={onInput}
            placeholder={'input keywords to search user'}></input>
        </div>
        <div className={classes.tableWrapper}>
          {
            loadStatus !== LoadStatus.LOADING &&
            buildTable()
          }
          {
            loadStatus === LoadStatus.LOADING &&
            <div className={classes.loading}><CircularProgress size={32} /></div>
          }
        </div>
      </div>
    )
  }

  const buildActions = () => {
    return (
      <div className={classes.actionArea}>
        <Button onClick={handleConfirm} color='primary' className={classes.confirmButton}>{'创建'}</Button>
        <Button onClick={handleCancel} color='primary'>{'取消'}</Button>
      </div>
    )
  }

  return (
    <Dialog open={open} onClose={handleCancel}>
      {buildTitle()}
      {buildContent()}
      {buildActions()}
    </Dialog>
  )
}

export default React.memo(UserSelectDialog);
