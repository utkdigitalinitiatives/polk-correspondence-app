import module namespace m='http://www.tei-c.org/pm/models/polk/epub' at '/db/apps/polk-papers/transform/polk-epub.xql';

declare variable $xml external;

declare variable $parameters external;

let $options := map {
    "styles": ["../transform/polk.css"],
    "collection": "/db/apps/polk-papers/transform",
    "parameters": if (exists($parameters)) then $parameters else map {}
}
return m:transform($options, $xml)