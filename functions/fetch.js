/*
Fetch data from an url
 returns parsed data results
*/

const https = require('https')

module.exports = (data, args) => {
  console.log(data, args)
  if(args[0].type == "literal"){
    console.log('calling', args[0].value);
    var request = https.request(args[0].value);
    request.on('response', async function(res) {
      console.log('response, received ', res.statusCode);
      var data = '';

      res.on('data', (chunk)=>{
        data += chunk;
      });

      res.on('end', ()=>{
        console.log('data==>',data);
        return JSON.parse(data);
      });

      res.on('error', (e) => console.log(e));

    })
    request.end()
  }
}
