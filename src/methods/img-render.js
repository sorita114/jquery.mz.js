import log from '../log';

export default function ($el, config, data) {
    $el
        .attr('src', data.src)
        .on('load', () => {
            if (data.mzLoad) {
                config.events[data.mzLoad](this, $el, config, data);
                log('success!![image load:event]:' + data.mzLoad, $el);
            }
        })
        .on('error', () => {
            if (data.mzError) {
                config.events[data.mzError](this, $el, config, data);
                log('success!![image error:event]:' + data.mzError, $el);
            }
        });
};