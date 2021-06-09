/* testMatrix Results */

module.exports = (data, args) => {
  // specify field names to check

var data = '{"status": "success",'
    data +=  '"data": { "resultType": "matrix", "result": [ { "metric": { "level": "info" }, "values": [ [ 1588889221,"137.95"],'
    data += '[ 1588889221, "467.115" ], [ 1588889221, "658.8516666666667" ]  ] },'
    data += '{"metric": {"level": "warn"},"values": [[1588889221,"137.27833333333334"],[1588889221,"467.69"],'
    data += '[1588889221,"660.6933333333334"]] } ]}}'

  return JSON.parse(data);
}
