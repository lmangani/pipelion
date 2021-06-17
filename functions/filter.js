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
  /* extract matrix data from loki input */
  if(debug)console.log('receiving', input)



  return input;
}
