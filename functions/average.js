/* return an average over all inputs */
const debug = true


module.exports = (data, args) => {
  // specify field names to check
  if(debug)console.log("average fn", data, args)

  for(let param of args) {
    if(param.value.value) {
      var fieldName = param.name;
      var sum = 0;
      var div = data.length;

      for(let row of data) {
        sum += row[fieldName];
      }

      var avg = sum / div;

      for(let row of data) {
        row[fieldName+'_'+'average'] = avg
      }
    }
  }



  return data;
}
