// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
esid: sec-delete-operator-runtime-semantics-evaluation
description: delete operator returns true for built-in objects (JSON)
flags: [noStrict]
---*/

var d = delete JSON;

assert.sameValue(d, true, 'd');

reportCompare(0, 0);
