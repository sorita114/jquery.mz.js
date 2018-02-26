import log from '../log';

export default function ($el, config, fn) {
    if (!config.events[fn]) {
        log('error!![load:event]:' + fn, $el);
        return;
    }
    $el.on('load', (event) => {
        config.events[fn](event, $el, config);
    });
    log('success!![load:event]:' + fn, $el);
};