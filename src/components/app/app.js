import React, { useState, useEffect } from 'react';
import { PaginatedList } from 'react-paginated-list';
import {
  Typography,
  Button
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { FormDialog } from '../form-dialog';
import { Spinner } from '../spinner';
import { useStyles } from './styles';
import { clearAnswers, fillQuestions, fetchQuestions as fetchAll } from '../../redux/actions';

const App = () => {
  const styles = useStyles();
  const [isFormOpen, openForm] = useState(false);
  const dispatch = useDispatch();
  const { questions, fetchQuestions } = useSelector(state => state);

  useEffect(() => {
    fetch('http://n74733u0.beget.tech/fetch-questions.php')
      .then(response => response.json())
      .then((data) => {
        dispatch(fillQuestions(data.flat()));
        dispatch(fetchAll(false));
      });
  }, []);

  const closeFormDialog = () => {
    openForm(false);
    dispatch(clearAnswers());
  };

  const renderQuestions = () => (
    <PaginatedList
      list={questions}
      itemsPerPage={3}
      renderList={(list) => (
        <>
          {list.map((item, index) => {
            return (
              <div className={styles.listItem} key={index}>
                {`${index + 1}. ${item}`}
              </div>
            );
          })}
        </>
      )}
    />
  );

  const empty = (
    <Typography variant='h4'>
      Список пуст
    </Typography>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography variant='h3'>Список вопросов</Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={() => openForm(true)}
        >
          Добавить
        </Button>
      </header>
      <hr/>
      <div className={styles.questions}>
        {fetchQuestions ? <Spinner/> : questions.length ? renderQuestions() : empty}
      </div>
      <hr/>
      <FormDialog open={isFormOpen} close={closeFormDialog}/>
    </div>
  );
};

export default App;
