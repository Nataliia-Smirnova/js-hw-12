import { error, alert, info } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

function pNotifyAppear(param) {
  if (param === 'alert') {
    alert({
      text: 'To many matches found. Please enter a more specific query!',
    });
  }
  if (param === 'error') {
    error({
      text: 'Nothing matched. Please try again',
    });
  }
}

export default pNotifyAppear;
