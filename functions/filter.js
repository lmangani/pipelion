/*

Filters data objects to only show chosen fields

assumes flattened input

.filter(main_id=1)
[
  { main_id: 1, main_obj_x: 10 } }
]

 */
const debug = true;

module.exports = (input, args) => {
  //if(debug)console.log('receiving', input)
  var output = [];
  /* we want to avoid running multiple loops over each object so
    we need to build an index of items to compare first and then only run
    that index against each objects field name */
  var index = {};
  for(let item of args) {
    if(debug)console.log(item)
    index[item.name] = item.value.value
  }

  /* Iterate over input objects */

  for(let object of input) {
    if(debug)console.log(object);
    for(let param in object) {
      if(debug)console.log('PARAMETER', param)
      if(index.hasOwnProperty(param)){
        if(debug)console.log('index has param', param, object[param], index[param]);
        if(object[param] == index[param]) {
          if(debug)console.log('Match in param and value', param, object[param]);
          output.push(object);
        }
      }
    }
  }

  return output;
}
