xquery version "3.0";

module namespace pm-config="http://www.tei-c.org/tei-simple/pm-config";

import module namespace pm-web="http://www.tei-c.org/pm/models/polk/web/module" at "../transform/polk-web-module.xql";
import module namespace pm-print="http://www.tei-c.org/pm/models/polk/fo/module" at "../transform/polk-print-module.xql";
import module namespace pm-latex="http://www.tei-c.org/pm/models/polk/latex/module" at "../transform/polk-latex-module.xql";
import module namespace pm-epub="http://www.tei-c.org/pm/models/polk/epub/module" at "../transform/polk-epub-module.xql";

declare variable $pm-config:web-transform := function($xml as node()*, $parameters as map(*)?, $odd as xs:string?) {
    pm-web:transform($xml, $parameters)
};
declare variable $pm-config:print-transform := function($xml as node()*, $parameters as map(*)?, $odd as xs:string?) {
    pm-print:transform($xml, $parameters)
};
declare variable $pm-config:latex-transform := function($xml as node()*, $parameters as map(*)?, $odd as xs:string?) {
    pm-latex:transform($xml, $parameters)
};
declare variable $pm-config:epub-transform := function($xml as node()*, $parameters as map(*)?, $odd as xs:string?) {
    pm-epub:transform($xml, $parameters)
};
