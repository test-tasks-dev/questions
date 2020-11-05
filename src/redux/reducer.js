import {
  ADD_QUESTION,
  ADD_ANSWERS,
  CLEAR_ANSWERS,
  REMOVE_ANSWER,
  REQUEST_FETCHING,
  FILL_QUESTIONS,
  FETCH_QUESTIONS
} from './actions/actions';

const initialState = {
  question: '',
  answers: [],
  requestFetching: false,
  fetchQuestions: true,
  questions: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION: {
      return {
        ...state,
        question: action.payload,
      };
    }

    case ADD_ANSWERS: {
      return {
        ...state,
        answers: [
          ...state.answers,
          action.payload,
        ],
      };
    }

    case CLEAR_ANSWERS: {
      return {
        ...state,
        answers: []
      };
    }

    case REMOVE_ANSWER: {
      const answersCopy = [...state.answers];
      answersCopy.splice(action.payload, 1);

      return {
        ...state,
        answers: answersCopy
      }
    }

    case REQUEST_FETCHING: {
      return {
        ...state,
        requestFetching: action.payload
      }
    }

    case FILL_QUESTIONS: {
      return {
        ...state,
        questions: action.payload
      }
    }

    case FETCH_QUESTIONS: {
      return {
        ...state,
        fetchQuestions: action.payload
      }
    }

    default:
      return state;
  }
};
