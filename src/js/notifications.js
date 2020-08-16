import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaultModules.set(PNotifyMobile, {});

defaults.width = '400px';
defaults.height = '200px';
defaults.hide = false;

const myError = error({
  text: 'To many matches found. Please enter a more specific query!',
});

console.log();

const pNotify = document.querySelector('.pnotify');
const pNotifyCloser = pNotify.querySelector('.pnotify-closer');
const pNotifyContainer = pNotify.querySelector('.pnotify-container');
const pNotifySticker = pNotify.querySelector('.pnotify-sticker');
const pNotifyText = pNotify.querySelector('.pnotify-text');

function pNotifyAppear() {
  pNotify.style.display = 'block';
}

export default pNotifyAppear;
