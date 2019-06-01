import Likely from 'cmtt-likely';

import { createElement } from './dom';
import * as Analytics from './analytics';

const CSS = {
    likely: 'likely',
    likelyCustom: 'likely--custom'
};

export const init = () => {
    Likely.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
export const make = (parentContainer, set = {}) => {
    let likelyContainer = createElement('div', [CSS.likely, CSS.likelyCustom]);
    let socials = ['vkontakte', 'facebook', 'twitter'];

    socials.forEach(social => {
        let button = createElement('div', social);

        //if (social === 'facebook') button.innerHTML = 'Поделиться';

        button.addEventListener('click', () => {
            Analytics.sendEvent(`Share ${social}`);
        });

        if (social === 'twitter') button.dataset.via = 'vcru'

        likelyContainer.appendChild(button);
    });

    parentContainer.appendChild(likelyContainer);

    if (set.url) likelyContainer.dataset.url = set.url;
    if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
    if (set.title) likelyContainer.dataset.title = set.title;

    init();
};
