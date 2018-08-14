import module namespace m='http://www.tei-c.org/pm/models/polk/fo' at '/db/apps/polk-papers/transform/polk-print.xql';

declare variable $xml external;

declare variable $parameters external;

let $options := map {
    "styles": ["../transform/polk.css"],
    "collection": "/db/apps/polk-papers/transform",
    "parameters": if (exists($parameters)) then $parameters else map {}
}
return m:transform($options, $xml)