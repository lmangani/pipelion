/*
Fetch data from an url
 returns parsed data results
*/

const https = require('https')
const debug = false;

module.exports = async (data, args) => {
  if(debug)console.log(data, args)
  var output = [];
  if(args[0].type == "literal"){
    console.log('calling\n', args[0].value+"\n", "This may take some time \n");
    return new Promise(function(resolve, reject){
      var request = https.request(args[0].value);
      request.on('response', async function(res) {
        if(debug)console.log('response, received ', res.statusCode);
        var data = '';


        res.on('data', (chunk)=>{
          data += chunk;
        });

        res.on('end',async ()=>{
          if(debug)console.log('data==>',data);
          var output = await handledata(data);
          console.log('output',output);
          resolve(output);
        });

        res.on('error', (e) => console.log(e));

      })
      request.end()
    })

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
