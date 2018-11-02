/*
 * event listeners for the TEI application
 */


function runLoad () {
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

// hide admin. @todo: still janky
function checkAdmin() {
    let pathname = window.location.pathname;
    if (pathname === '/exist/apps/tei-publisher/odd-editor.html') {
        let reactHeader = document.getElementById('utk-lib-header');
        reactHeader.setAttribute('style', 'display:none !important;');
    }
}

window.addEventListener('load', runLoad, false);


// reset has after login to avoid looping
function loginActions () {
    window.location.hash = '#loginSent';
}

const el = document.getElementById("loginSubmit");
window.addEventListener('click', loginActions, false);


// scours for core TEI login button, if it exists, hides ugly admin nav
let loginExists = document.getElementById("login");
if (loginExists) {
    // let navbar = document.getElementsByClassName('navbar');
    // let iterateNav = Array.prototype.filter.call(navbar, function(nav){
    //     nav.setAttribute('style', 'display:none !important;');
    // });
}