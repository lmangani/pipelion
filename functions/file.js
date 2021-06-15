/*
Fetch data from a json file 
 returns parsed data results
*/
var fs = require('fs');


module.exports = function fn (data, args) {
  // specify field names to check
  if(args[0].type == 'literal'){
    return JSON.parse(fs.readFileSync(args[0].value, 'utf-8'));
  }
}
