/**
 * Entry point
 */

import './css/special.styl';

import { Special } from './js/special.js';

const Wrapper = document.getElementById('wrapper');
const Container = document.getElementById('cmtt-special');

new Special({
    container: Container,
    isFeed: document.querySelector('[air-module="module.feed"], [air-module="module.page_search"]') ? true : false,
    share: {
        url: 'https://vc.ru/special/megafon-target/result',
        title: 'Тест: Кому пришла таргетированная SMS?',
    },
    allowSkip: true,
});

const FeedToggle = document.getElementById('feed-toggle');

FeedToggle.addEventListener('change', function () {
    if (this.checked) {
        Container.dataset.isFeed = '';
        Wrapper.setAttribute('air-module', 'module.feed');
    } else {
        delete Container.dataset.isFeed;
        Wrapper.removeAttribute('air-module');
    }
});
