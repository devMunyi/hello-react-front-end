import { FETCH_GREETING } from '../actions';

/* eslint-disable comma-dangle */
// set initial state
const initialState = {
  greeting: {},
  isLoading: false
};

// reducer
const greetingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_GREETING}/fulfilled`:
      return { ...state, greeting: payload, isLoading: false };

    case `${FETCH_GREETING}/pending`:
      return { ...state, isLoading: true };

    case `${FETCH_GREETING}/rejected`:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default greetingReducer;
