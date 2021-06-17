/*
Fetch data from a json file
 returns parsed data results
*/
var fs = require('fs');

const debug = false;

module.exports = async function (data, args) {
  // specify field names to check
  if(args[0].type == 'literal'){
    if(debug)console.log('retrieving file', args[0].value);
    var data = fs.readFileSync(args[0].value, 'utf-8');
    return handledata(data);
  }
}

async function handledata (data) {

  var output; // expected to be an array of objects
  /* Handle Data differently depending on your input type
      expects JSON, but in js world it expects string, object or array */
  if(typeof data == "string"){
    /* Assume first it's a JSON string, if not then package and return back as object inside an array */
    if(debug)console.log('received String');

    try {
      // try to parse the data
      var parsedData = JSON.parse(data);
      // if it succeeds pass it back into handledata and return it
      output = handledata(parsedData);
    } catch (e) {
      if(debug)console.log('JSON parse failed, assuming raw string, error: ', e)
      // if it fails assume it's a string and return an object
      output = [{data:data}]
      if(debug)console.log('outputting', output);
    }

  } else if (typeof data == "object") {
    if(debug)console.log('received Object', Array.isArray(data), data);
    //test if it is an array
    if(Array.isArray(data)) {
      if(debug)console.log('isArray', data);
      output = data;
      if(debug)console.log('outputting', output);
    } else {
      if(debug)console.log('isObject', data);
      output = [data];
      if(debug)console.log('outputting', output);
    }
  }

  return output;
}
