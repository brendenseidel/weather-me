
const weather = require('./weather');

const location = process.argv.slice(2).reverse().join("/");
// console.log(location);
weather.get(location);