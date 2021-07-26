/* follow pq pattern to parse log files into timeseries

echo "testing \n test12n" | node index.js ".pq('{\"strategy\": regex,\"expression\":\"[a-Z]*\"')"

*/

const debug = true;
var strategy = 'json';

module.exports = function fn (input, args) {

  // add strategy regex and json
  // handle decoder based on strategy

  if(debug)console.log('called pq with', input, args);

  if(input.value.strategy == "regex") {
    strategy = "regex"
  }

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin
  });

  rl.on('line', parser);

}

async function parser (lineInBuffer) {
  console.log(typeof lineInBuffer, lineInBuffer)
}
