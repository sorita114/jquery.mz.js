import $ from 'jquery';

export default function (message, element) {
    if ($.mz.isDevelop) {
        console.log(message, element);
    }
};