/* follow pq pattern to parse log files into timeseries

echo "testing \n test12n" | node index.js ".pq('{\"strategy\": \"regex\",\"expression\":\"[a-zA-Z]\"}')"

*/

const readline = require('readline')

const debug = true
var strategy = 'json'
var regexp = ''
var result = []

module.exports = async function (input, args) {

  if(debug)console.log('called pq with', input, args)
  // add strategy regex and json
  // handle decoder based on strategy

  var pq = JSON.parse(args[0].value);

  if(pq.strategy == "regex") {
    strategy = "regex"
    regexp = pq.expression
  }

  const rl = readline.createInterface({
    input: process.stdin
  })

  return parseData(rl);
/*
  rl.on('line', parser)

  rl.on('close', offerResult.bind(this, result))

  function offerResult (resultData) {
    if(debug)console.log('returning result', resultData);
    return resultData
  }*/
}

async function parseData (readerInterface) {
  var data = readerInterface.line
  console.log(data)
  var resultArr = []

}

async function parser (lineInBuffer) {
  console.log(typeof lineInBuffer, lineInBuffer)
  /* depending on the strategy that is set, we parse either via regex decoder or via json decoder */
  if(strategy == 'json') {
    return await decoderJSON(lineInBuffer)
  } else if ( strategy == "regex") {
    return await decoderRegex(lineInBuffer)
  }
}

async function decoderJSON(line) {
  /* decode each line from JSON input */
  var decodedData = JSON.parse(line)
  return decodedData
}

async function decoderRegex (line) {
  /* decode each line per match from regular expression */
  var decodedData = line.match(regexp);
  return decodedData;
}
