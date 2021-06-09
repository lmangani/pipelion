/*

Returns a sum of values into chosen fieldName=fieldValue combinations

 */
const debug = false;

module.exports = (input, args) => {
  //console.log('args \n', args);
  //console.log('type \n', input.data.resultType);
  //console.log('values \n', input.data.result[0]);
  /* extract matrix data from loki input */
  var data = input.data.result;

  /* check if args were provided to args */

  for(let param of args) {
    if(param.name) {
      var fieldName = param.name;
      var fieldValue = param.value.value;
      var sum = 0;

      for(let row of data) {
        if(row.metric[fieldName] == fieldValue){

          for(let value of row.values) {
            if(debug)console.log('value: ' + value[1]);
            sum += parseInt(value[1]);
          }

          row[fieldName +'_'+fieldValue+'_sum'] = sum;

        }
        if(debug)console.log(row);
      }
    }
  }

  return input;
}
