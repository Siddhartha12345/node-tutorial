// CommonJS - every file is module (by defalt)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-module-names');
console.log(names);

const sayHi = require('./5-module-utils');
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

const data = require('./6-module-alternative-flavor');
console.log(data);

require('./7-module-mind-grenade');