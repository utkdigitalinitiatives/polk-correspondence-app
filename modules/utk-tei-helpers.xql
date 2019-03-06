xquery version "3.0" encoding "UTF-8";

(:~
 : --------------------------------------------
 : UTK Digital Initiatives TEI Helper Functions
 : --------------------------------------------
 : @version 0.1
 : @see https://github.com/utkdigitalinitiatives
 :)


(: module declaration :)
module namespace bds = "http://some.url.net/utk-tei-helpers";

(: imports :)
import module namespace functx = "http://www.functx.com";

(:~
 : Reformat tei:date[@when]
 : @author Bridger
 : @version 0.1
 : @param $date the ISO 8601 date as YYYY-MM-DD
 : @return xs:string as [Month, Day Year]
 :)

declare function bds:format-search-result-date(
	$date as xs:string?
) as xs:string {
	if ($date)
	then (
		functx:month-name-en(xs:date($date)) ||
		", " ||
		fn:day-from-date(xs:date($date)) ||
		" " ||
		fn:year-from-date(xs:date($date))
	)
	else ()
};