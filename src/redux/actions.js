export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWERS = 'ADD_ANSWERS';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const REQUEST_FETCHING = 'REQUEST_FETCHING';
export const FILL_QUESTIONS = 'FILL_QUESTIONS';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export const fetchQuestions = (fetch) => ({
  type: FETCH_QUESTIONS,
  payload: fetch
});

const requestFetching = (fetching) => ({
  type: REQUEST_FETCHING,
  payload: fetching
});

export const addQuestion = (question) => (dispatch) => {
  dispatch(requestFetching(true));

  fetch('http://n74733u0.beget.tech/add-question.php', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question })
  })
    .then(() => {
      dispatch(requestFetching(false));
    })
    .then(() => {
      fetch('http://n74733u0.beget.tech/fetch-questions.php')
        .then(response => response.json())
        .then((data) => {
          dispatch(fillQuestions(data.flat()));
        });
    });
};

export const addAnswers = (answers) => ({
  type: ADD_ANSWERS,
  payload: answers
});

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS,
  payload: []
});

export const removeAnswer = (index) => ({
  type: REMOVE_ANSWER,
  payload: index
});

export const fillQuestions = (questions) => ({
  type: FILL_QUESTIONS,
  payload: questions
});
