//  vue.config.js
const utils  = require('./util');
console.log(utils.getPages());
module.exports = {
 baseUrl: './',
 pages: utils.getPages()
}

