import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    height: '100%',
    margin: 'auto',
    padding: '100px 20px 0 20px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  questions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}));
