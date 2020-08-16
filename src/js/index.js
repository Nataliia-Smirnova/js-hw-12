const debounce = require('lodash.debounce');

import '../styles.css';
import refs from './refs';
// import myError from './notifications';
// import pNotifyAppear from './notifications';
import fetchCountries from './fetchCountries';
// import updateMarkup from './update-markup';
// import countriesList from '../templates/countries.hbs';
// import uniqueCountrie from '../templates/unique-countrie.hbs';

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value;

    refs.resultList.innerHTML = '';
    fetchCountries(inputValue);
  }, 500),
);
