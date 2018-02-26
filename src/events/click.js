import log from '../log';

export default function ($el, config, fn) {
    if (!config.events[fn]) {
        log('error!![click:event]:' + fn, $el);
        return;
    }
    $el.on('click', (event) => {
        config.events[fn](event, $el, config);
    });
    log('success!![click:event]:' + fn, $el);
};