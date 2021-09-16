import { GET_COUNTRIES, SET_ERROR, SET_LOADING } from './types';

// Set loading to true
export const setLoading = () => ({
  type: SET_LOADING,
});

export const getCountries = () => async (dispatch) => {
  try {
    setLoading();
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
