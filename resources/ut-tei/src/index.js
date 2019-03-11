/*
 * Polyfills for backwards compatibility
*/
import 'core-js/es7/symbol';
import 'core-js/es7/object';
import 'core-js/es7/array';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

/*
 * Imports the React goodies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CustomSubheader from './CustomSubheader';
import debounce from 'lodash/debounce';

/*
 * Import UT Libraries Header
 */

import './vendor/utk_lib_header/header.js';

/*
 * Imports non-JSX scripts.
 */
import './scripts/teiEvents';

/*
 * Handles all stylesheets
 */
import './scss/ut-tei.scss';
import './vendor/bootstrap/bootstrap-grid.scss';
import './vendor/fontello/css/fontello.scss';

function run() {
    ReactDOM.render(<CustomSubheader />, document.getElementById('utk-custom-subheader'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
    debounce(run(), 10);
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
