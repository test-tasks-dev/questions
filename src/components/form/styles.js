import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  field: {
    width: '100%',
  },

  wrapper: {
    paddingBottom: 20,
    '&:last-of-type': {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'no-wrap',
    },
  },

  addButton: {
    marginLeft: 10,
  },
});
