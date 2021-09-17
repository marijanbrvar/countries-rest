import {
  GET_COUNTRIES, SET_ERROR, SET_LOADING, SET_CURRENT, CLEAR_CURRENT,
} from './types';

// Set loading to true
export const setLoading = () => ({
  type: SET_LOADING,
});

export const getCountries = () => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch('https://restcountries.com/v2/continent/europe');
    const data = await res.json();

    dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.ressponse.data,
    });
  }
};

export const getCurrent = (code) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`https://restcountries.com/v2/alpha?codes=${code}`);
    const data = await res.json();

    dispatch({
      type: SET_CURRENT,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.ressponse.data,
    });
  }
};

// Clear current log
export const clearCurrent = () => ({
  type: CLEAR_CURRENT,
});
