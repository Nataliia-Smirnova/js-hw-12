import updateUniqueCountryMarkup from './update-unique-markup';
import updateResultMarkup from './update-markup';
import pNotifyAppear from './notifications';

function resultCheck(data) {
  if (data.length > 1 && data.length <= 10) updateResultMarkup(data);
  else if (data.length === 1) updateUniqueCountryMarkup(data);
  else if (data.length > 10) pNotifyAppear('alert');
  else {
    pNotifyAppear('error');
  }
}

export default resultCheck;
