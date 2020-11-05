import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    minWidth: 320,
    height: '100%',
    margin: 'auto',
    padding: '100px 20px 0 20px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,

    '& h3': {
      [theme.breakpoints.down(768)]: {
        fontSize: 35
      },
      [theme.breakpoints.down(480)]: {
        fontSize: 25
      }
    }
  },

  questions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  listItem: {
    padding: 10,
    fontSize: 18
  }
}));
