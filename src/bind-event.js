import log from './log';
import click from './events/click';
import load from './events/load';
import error from './events/error';

const EVENT_TYPES = {
    'mzClick': click,
    'mzLoad': load,
    'mzError': error
};

export default function (eventName, $el, config, fn) {
    if (EVENT_TYPES.hasOwnProperty(eventName)) {
        EVENT_TYPES[eventName]($el, config, fn);
    } else {
        log('error!![not exist event]:' + eventName);
        return undefined;
    }
};