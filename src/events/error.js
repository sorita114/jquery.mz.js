import log from '../log';

export default function ($el, config, fn) {
    if (!config.events[fn]) {
        log('error!![error:event]:' + fn, $el);
        return;
    }
    $el.on('error', (event) => {
        config.events[fn](event, $el, config);
    });
    log('success!![error:event]:' + fn, $el);
};