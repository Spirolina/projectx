import htmlTranslater from "./htmlTranslater.js";
import Component from "./Component.js";
const body = document.body;
const div = new Component('root', { a: 4, b: 5 }, 'div');
const div2 = new Component(div, {}, 'div2')
const div3 = new Component(div2, {}, 'div3')



div2.state = {
    a: 'div2', 
    b: 'div3'
}

div3.state = {
    a: 'div3'
}


setTimeout(() => {
    div3.state = {
        a: 'div3',
        b:'hello'
    }
}, 3000)

setTimeout(() => {
    div2.state = {
        a: 'asdfasdf'
    }
}, 6000)