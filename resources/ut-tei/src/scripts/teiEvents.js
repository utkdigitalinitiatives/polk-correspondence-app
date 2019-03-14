/*
 * event listeners for the TEI application
 */

function runLoad() {
    doModal();
    checkAdmin();
}

// set modal popup on URL visit w/ #loginDialog
function doModal() {
    let hash = window.location.hash;
    if (hash === '#login') {
        let modal = document.getElementById('loginDialog');
        modal.classList.add('in');
        modal.setAttribute('style', 'display:block !important;');
    }
}

/* hide admin. todo: still janky */
function checkAdmin() {
    let pathname = window.location.pathname;
    if (pathname === '/exist/apps/tei-publisher/odd-editor.html') {
        let reactHeader = document.getElementById('utk-lib-header');
        reactHeader.setAttribute('style', 'display:none !important;');
    }
}

window.addEventListener('load', runLoad, false);

// reset after login to avoid looping dialog
function loginActions() {
    window.location.hash = '#loginSent';
}

let loginMenuButton = document.getElementById('login-menu-button');

if (loginMenuButton !== null) {
    loginActions()
}

/*
 * build logos on landing page
 */

import LogoNHPRC from '../media/custom/nhprc-logo-l.jpg';
import LogoNEH from '../media/custom/NEH_h-logo_03_all-black.svg';
import LogoNewfoundPress from '../media/custom/newfound-press-logo.svg';

const urlParams = new URLSearchParams(window.location.search);
const defaultRoot = '1.4.2.4';

if (urlParams.has('root')) {
    let root = urlParams.get('root');
    if (root === defaultRoot) {
        buildLandingPage();
    }
} else {
    buildLandingPage();
}

function buildLandingPage () {
    if (document.getElementById('document-pane')) {
        const documentPaneContent = document.getElementById('document-pane').getElementsByClassName('content')[0];
        const landingPage = document.createElement('div');
        landingPage.classList.add('polk-logos');
        landingPage.classList.add('row');
        landingPage.innerHTML =
            "<div class='col-sm-4 col-xs-12'><a href='https://www.archives.gov/nhprc' target='_blank'><img src='" + LogoNHPRC + "' alt='National Archives: National Historical Publications & Records Commission'/></a></div>" +
            "<div class='col-sm-4 col-xs-12'><a href='https://www.neh.gov/' target='_blank'><img src='" + LogoNEH + "' alt='National Endowment for the Humanities'/></a></div>" +
            "<div class='col-sm-4 col-xs-12'><a href='https://newfoundpress.utk.edu/' target='_blank'><img src='" + LogoNewfoundPress + "' alt='Newfound Press'/></a></div>"
        ;
        documentPaneContent.appendChild(landingPage);
    }
}
