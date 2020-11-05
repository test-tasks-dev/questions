import React, { useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { addQuestion, addAnswers, removeAnswer as remove } from '../../redux/actions';

export const Form = () => {
  const styles = useStyles();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { answers, requestFetching } = useSelector(state => state);

  const initialValues = {
    question: '',
    answer: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.question.trim()) {
      errors.question = 'Это поле должно быть заполнено';
    } else if (values.question.trim().length < 20) {
      errors.question = 'Вопрос должен содержать не менне 20 символов';
    }

    if (!values.answer.trim()) {
      errors.answer = 'Это поле должно быть заполнено';
    }

    return errors;
  };

  const onSubmit = (values) => {
    dispatch(addQuestion(values.question));
  };

  const addAnswer = () => {
    const input = ref.current.querySelector('input');
    const { value } = input;

    if (!value.trim()) return;

    dispatch(addAnswers(value));
    input.value = '';
  };

  const removeAnswer = (index) => {
    dispatch(remove(index));
  };

  const renderAnswers = () => (
    <List>
      {
        answers.map((answer, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={`${index + 1}. ${answer}`}/>
              <IconButton onClick={() => removeAnswer(index)}>
                <HighlightOffIcon/>
              </IconButton>
            </ListItem>
            <Divider/>
          </React.Fragment>
        ))
      }
    </List>
  );

  return (
    <Formik {...{ initialValues, onSubmit, validate }}>
      {({ getFieldProps, submitForm, errors }) => (
        <form>
          <div className={styles.wrapper}>
            <TextField
              className={styles.field}
              error={!!errors.question}
              name='question'
              placeholder='Новый вопрос'
              label="Вопрос"
              variant="outlined"
              helperText={errors.question}
              {...getFieldProps('question')}
            />
          </div>
          {answers.length ? renderAnswers() : null}
          <div className={styles.wrapper}>
            <TextField
              className={styles.field}
              error={!!errors.answer}
              name='answer'
              placeholder='Введите ответ'
              label="Ответ"
              variant="outlined"
              helperText={errors.answer}
              {...getFieldProps('answer')}
              ref={ref}
            />
            <Button
              className={styles.addButton}
              variant='contained'
              color='primary'
              onClick={addAnswer}
            >
              <AddIcon/>
            </Button>
          </div>
          <Button
            variant='contained'
            color='primary'
            onClick={submitForm}
            disabled={requestFetching}
          >
            Сохранить
          </Button>
        </form>
      )}
    </Formik>
  );
};
