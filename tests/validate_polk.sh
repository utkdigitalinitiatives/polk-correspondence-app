#!/bin/bash

testEquality() {
    POLK=$(xmllint --noout --relaxng ../data/tei_lite_di_v3.rng ../data/polk.xml 2>&1 1>/dev/null | cat)
    assertEquals "${POLK}" "../data/polk.xml validates"
}

. shunit2