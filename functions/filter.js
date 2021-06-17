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
  /* Iterate over input objects */
  if(debug)console.log('receiving', input)



  return input;
}
