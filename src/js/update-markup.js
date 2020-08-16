import countriesList from '../templates/countries.hbs';

import refs from './refs';

function updateResultMarkup(countries) {
  const markup = countriesList(countries);
  refs.resultList.insertAdjacentHTML('beforeend', markup);
}

export default updateResultMarkup;
