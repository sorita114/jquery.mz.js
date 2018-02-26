import $ from 'jquery';
import init from './src/init';
import log from "./src/log";

const SELECTORS = new RegExp('mz', 'gi');

const _mounted = ($container, {
    mounted = () => {}
} , resolve) => {
    log('[mounted]:', $container);
    mounted($container);
    resolve();
};

$.mz = {
    isDevelop: false
};

$.fn.mz = function(options) {
    'use strict';

    let _defaults = {
        el : this
    };

    return this.each(function (i ,v) {
        let config = $.extend(true, {}, _defaults, options, {
            el : v
        });
        //mounted
        let promise = new Promise((resolve, reject) => {
            _mounted($(v), config, resolve, reject);
        });
        //evnet-bind
        promise.then(() => {
            init(v, config);
            let childrenNode = v.querySelectorAll('*');
            for(let node of childrenNode) {
                for(let i = 0, len = node.attributes.length; i < len; i++) {
                    if(SELECTORS.test(node.attributes[i].name)) {
                        init(node, config);
                    }
                }
            }
        });

    });
};