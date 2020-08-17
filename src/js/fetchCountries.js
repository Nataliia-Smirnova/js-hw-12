import resultCheck from './result-check';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  fetch(url)
    .then(res => res.json())
    .then(data => resultCheck(data));
}

export default fetchCountries;
