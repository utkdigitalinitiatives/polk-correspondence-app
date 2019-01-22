const UrlParse = require('url-parse');
const ParseDomain = require('parse-domain');


/*
 * get Global URL
 */

const Globals = [];
const productionUrl = 'https://www.lib.utk.edu/';

const menuContainerElement = document.getElementById('utk-lib-header');
const SubsiteGlobals = {
    'siteURL': menuContainerElement.getAttribute('data-url'),
};

Globals.URL = SubsiteGlobals.siteURL; // left null to force relative endpoint to wp instance


/*
 * checks if local URL, if true just get production to avoid HTTPS cert issues.
 */

let localUrl = ParseDomain(UrlParse(Globals.URL).host, {
    customTlds: /localhost|\.test/
});

if (localUrl)
    Globals.URL = productionUrl;


/*
 * export URL string
 */

export default Globals;