const debounce = require('lodash.debounce');

import '../styles.css';
import refs from './refs';
import fetchCountries from './fetchCountries';

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value;

    refs.resultList.innerHTML = '';
    fetchCountries(inputValue);
  }, 500),
);
