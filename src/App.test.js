import reducer from './store/reducers/countriesReducer';
import { getCountries } from './store/__mocks__/api';
import countries from './store/__mocks__/countries';

test('Return initial state', () => {
  const initialState = {
    countries: [],
    current: null,
    error: null,
    loading: false,
  };
  const stateNew = reducer(undefined, {});
  expect(stateNew).toEqual(initialState);
});

test('Returns received state', () => {
  const initialState = {
    countries,
    current: null,
    error: null,
    loading: false,
  };
  const stateNew = reducer(initialState, getCountries(countries));
  expect(stateNew).toEqual({
    countries,
    current: null,
    error: null,
    loading: false,
  });
});
