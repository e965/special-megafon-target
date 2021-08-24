/**
 * Entry point
 */

import './css/special.styl';

import { Special } from './js/special.js';

const Container = document.getElementById('cmtt-special');

console.log(Container);

new Special({
    container: Container,
    isFeed: document.querySelector('[air-module="module.feed"], [air-module="module.page_search"]') ? true : false,
    share: {
        url: 'https://vc.ru/special/megafon-target/result',
        title: 'Тест: Кому пришла таргетированная SMS?',
    },
    allowSkip: true,
});
