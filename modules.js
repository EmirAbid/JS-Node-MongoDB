//const xyz = require('./people')
//console.log(xyz.people);
//console.log(xyz.ages);
const {people , ages} = require('./people'); 
console.log(people , ages)

const os = require('os'); 
console.log(os.homedir(), os.platform())