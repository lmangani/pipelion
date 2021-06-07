/* return an average over all inputs */

module.exports = (data, args) => {
  // specify field names to check

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
