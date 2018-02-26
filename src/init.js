import $ from 'jquery';
import imgRender from './methods/img-render';
import render from './methods/render';

export default function (element, config) {
    let $element = $(element);
    let data = $element.data();
    //bindEvent
    switch (data.mz) {
        case 'image' :
            imgRender($element, config, data);
            break;
        default :
            render($element, config, data);
            break;
    }
};

