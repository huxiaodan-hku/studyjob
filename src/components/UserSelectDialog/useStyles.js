import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  titleArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 24,
    fontFamily: 'Roboto-Regular',
    fontSize: theme.fontSize20,
  },
  contentArea: {
    backgroundColor: theme.gray15,
  },
  query: {
    margin: '16px 24px',
    background: theme.white,
    width: 'calc(100% - 50px)',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
  },
  queryIcon: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    '&:before': {
      color: theme.textLightest,
    },
    fontSize: 16,
  },
  queryInput: {
    height: 40,
    width: '100%',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    padding: '0 8px 0 0',
    color: theme.textLight,
    fontSize: theme.fontSize14,
  },
  actionArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '24px 24px 16px 24px',
  },
  tableWrapper: {
    margin: '0 24px',
    width: 'calc(100% - 48px)',
    height: 350,
  },
  headCell: {
    fontSize: theme.fontSize14,
    fontFamily: 'Roboto Regular',
    color: theme.textNormal,
    padding: '0 0 0 16px',
    backgroundColor: theme.white,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  headerCheckbox: {
    zIndex: 1,
  },
  // tableBodyWrapper: {
  //   height: 318,
  //   backgroundColor: theme.white,
  //   ...theme.comb.narrowScroll(),
  // },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.white,
  },
  loadMore: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: '100%'
  },
  avatarColumn: {
    width: 68,
  },
  nameColumn: {
    width: 212,
  },
  descColumn: {
    width: 280,
  },
  headRow: {
    display: 'flex',
    alignItems: 'center',
    height: 32,
  },
  confirmButton: {
    marginRight: 16,
  },
  noResult: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
    fontSize: theme.fontSize20,
    color: theme.textLight,
  }
}))

export default useStyles;
