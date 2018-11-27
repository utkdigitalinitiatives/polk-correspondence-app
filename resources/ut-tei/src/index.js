/*
 * Imports the React goodies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import debounce from 'lodash/debounce';

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
    ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
    debounce(run(), 10);
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}