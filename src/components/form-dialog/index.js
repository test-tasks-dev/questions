import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import { Form } from '../form';
import {useStyles} from './styles';

export const FormDialog = ({ open, close }) => {
  const styles = useStyles();

  return (
    <Dialog
      classes={{
        paper: styles.paper
      }}
      open={open}
      onClose={close}
    >
      <DialogTitle>
        Добавить вопрос
      </DialogTitle>
      <DialogContent>
        <Form/>
      </DialogContent>
    </Dialog>
  )
};
