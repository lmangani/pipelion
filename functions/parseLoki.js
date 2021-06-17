/*
Parse data from a Loki query result into pipelion format

an array of objects symbolizing data points
*/

const debug = false;

module.exports = function fn (input, args) {
  if(debug)console.log(input.response)
  /* extract matrix data from loki input */
  if(debug)console.log('receiving', input)
  var data = input.response.data.result;
  var dataType = input.response.data.resultType;
  var array = []; //results array of objects
  if(dataType == "streams") {
    /* Iterate over returned streams */
    for(let stream of data) {
      let parentAttributes = [];
      //console.log("stream", stream);
      /* Iterate over each key and field in the stream metadata */
      for(let prop in stream.stream) {
        parentAttributes.push([prop, stream.stream[prop]]);
      }
      /* iterate over the values of the stream */
      for(let value of stream.values) {
        if(debug)console.log('value:', value);
        let timestamp = parseInt(value[0]);
        let valueObject = JSON.parse(value[1]);
        valueObject['__timestamp'] = timestamp;
        for(let index in parentAttributes){
          let item = parentAttributes[index];
          valueObject["__" + item[0]] = item[1]
        }
        if(debug)console.log("resulting Object", valueObject);
        array.push(valueObject);
      }
    }
    return array;
  } else if (dataType == "matrix") {
    console.log('matrix is currently not supported, to be released soon')
    throw('matrix is currently not supported, to be released soon')
  }


}
