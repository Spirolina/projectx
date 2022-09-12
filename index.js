import htmlTranslater from "./htmlTranslater.js";
import Component from "./Component.js";
const body = document.body;
const div = new Component('root', { a: 4, b: 5 }, 'kaan');
const div2 = new Component(div, {}, 'arda')
div2.state = {
    a: 'arda'
}


setTimeout(() => {
    div2.state = {
        a:'arda changed'
    }
}, 3000)


