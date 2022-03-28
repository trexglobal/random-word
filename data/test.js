'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('adjs.json');
let adjectives = JSON.parse(rawdata);
let final_list = adjectives.filter(i => i !=null && i.length < 6 && i.length > 2)
console.log(final_list);

let data = JSON.stringify(final_list);
fs.writeFileSync('filtered-adjs.json', data);