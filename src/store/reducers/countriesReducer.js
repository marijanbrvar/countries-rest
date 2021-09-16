import { GET_COUNTRIES, SET_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  countries: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      console.log('erroroor', action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
