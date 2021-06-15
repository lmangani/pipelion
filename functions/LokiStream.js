/* test Streams Data Results */
var fs = require('fs');


module.exports = (data, args) => {
  // specify field names to check

return JSON.parse(fs.readFileSync('loki.json', 'utf-8'));
}
