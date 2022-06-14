//commonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./6-utilities')
//console.log(names)
const data = require('./5-altflavor')
require('./7-mind-grenade')
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);