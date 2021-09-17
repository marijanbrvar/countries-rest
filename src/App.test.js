import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import reducer from './store/reducers/countriesReducer';
import { getCountries } from './store/__mocks__/api';
import countries from './store/__mocks__/countries';

test('Renders Countries react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/European/i);
  expect(linkElement).toBeInTheDocument();
});

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
