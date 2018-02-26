import bindEvent from '../bind-event';

export default function ($el, config, data) {
    for (let prop in data) {
        bindEvent(prop, $el, config, data[prop]);
    }
};