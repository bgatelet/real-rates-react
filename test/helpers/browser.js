require('babel-core/register');

var LocalStorage = require('node-localstorage').LocalStorage;
global.localStorage = new LocalStorage('./localStorageTemp');

const sinon = require('sinon');

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.window.localStorage = global.localStorage;
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
copyProps(window, global);
