import uniqueCountry from '../templates/unique-countrie.hbs';

import refs from './refs';

function updateUniqueCountryMarkup(query) {
  const markup = uniqueCountry(query);
  refs.resultList.insertAdjacentHTML('beforeend', markup);
}

export default updateUniqueCountryMarkup;
