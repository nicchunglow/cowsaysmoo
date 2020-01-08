const cows= require('cows')();

const index = process.argv[2] || 0;

console.log(cows[index]);