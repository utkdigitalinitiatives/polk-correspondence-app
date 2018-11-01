/*
 * Imports the React goodies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

/*
 * Imports non-JSX scripts.
 */
import './scripts/teiEvents';

/*
 * Handles all stylesheets
 */
import './scss/utk-lib-header.scss';
import './vendor/bootstrap/bootstrap-grid.scss';
import './vendor/fontello/css/fontello.scss';

ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));