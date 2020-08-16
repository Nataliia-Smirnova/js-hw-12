import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

import updateUniqueCountryMarkup from './update-unique-markup';
import updateResultMarkup from './update-markup';
import pNotifyAppear from './notifications';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.length > 1 && data.length <= 10) updateResultMarkup(data);
      else if (data.length === 1) updateUniqueCountryMarkup(data);
      else if (data.length > 10) pNotifyAppear();
      else nothingFoundNotify();
    });
  // .catch(error =>
  //   PNotify.error({
  //     title: 'Oh No!',
  //     text: 'Something terrible happened.',
  //   }),
  // );
}

export default fetchCountries;
