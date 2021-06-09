/*

Returns the Average of a chosen fieldName=fieldValue combination

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
      var sum = 0;
      var div = data.length;
      if(debug)console.log(div, sum, fieldName);
      for(let row of data) {

        if(row.metric[fieldName] == fieldValue){

          for(let value of row.values) {
            if(debug)console.log('value: ' + value[1]);
            sum += parseInt(value[1]);
          }
          var avg = sum / div;
          row[fieldName +'_'+fieldValue+'_avg'] = avg;
        }
      }
    }
  }

  return input;
}
