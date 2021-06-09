/*

Returns the smallest Number of a chosen fieldName=fieldValue combination

 */
const debug = false;

module.exports = (input, args) => {
  /* extract matrix data from loki input */
  var data = input.data.result;

  /* check if args were provided to args */

  for(let param of args) {
    if(param.name) {
      var fieldName = param.name;
      var fieldValue = param.value.value;
      var sortArray = [];
      var div = data.length;
      if(debug)console.log(div, fieldName);
      for(let row of data) {

        if(row.metric[fieldName] == fieldValue){

          for(let value of row.values) {
            if(debug)console.log('value: ' + value[1]);
            sortArray.push(parseInt(value[1]));
            sortArray.sort(leastFirst)
          }

          row[fieldName +'_'+fieldValue+'_bottom'] = sortArray[0];
        }
      if(debug)console.log(row);
      }
    }
  }

  return input;
}

function leastFirst(a, b) {
  return a-b;
}
