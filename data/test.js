'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('safe.json');
let adjectives = JSON.parse(rawdata);
let final_list = adjectives.filter(i => i !=null && i.length < 6 && i.length > 2).map(i => i.toLowerCase())
var uniq = final_list.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
console.log(uniq);

let data = JSON.stringify(uniq);
fs.writeFileSync('filtered-safe.json', data);