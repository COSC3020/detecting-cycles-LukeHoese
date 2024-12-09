const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph1 = {
};
const ans1 = hasCycle(graph1);
assert(JSON.stringify(ans1) == JSON.stringify(false));

const graph2 = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};
const ans2 = hasCycle(graph2);
assert(JSON.stringify(ans2) == JSON.stringify(true));

const graph3 = {
    0: [1],
    1: [0, 2],
    2: [1, 3],
    3: [2, 4],
    4: [3, 0]
};
const ans3 = hasCycle(graph3);
assert(JSON.stringify(ans3) == JSON.stringify(true));

const graph4 = {
    0: [1],
    1: [0, 2],
    2: [1]
};
const ans4 = hasCycle(graph4);
assert(JSON.stringify(ans4) == JSON.stringify(false));
