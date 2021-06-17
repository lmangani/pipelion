/*

Flatten each object from nested to parent_child_child: value

[
  { main: { id: 1, obj: { x: 10, y: 21 } } },
  { main: { id: 2, obj: { x: 11, y: 22 } } },
  { main: { id: 3, obj: { x: 12, y: 23 } } }
}

.flatten(main_id,main_obj_x)
[
  { main_id: 1, main_obj_x: 10 } },
  { main_id: 2, main_obj_x: 11 } },
  { main_id: 3, main_obj_x: 12 } }
]


 */
const debug = true;

module.exports = (input, args) => {
  if(debug)console.log('receiving', input)

  var output = [];
  /* iterate over each object, build a new object
    flatten all the levels of children for values that are arrays or objects
    */
  for(let object of input) {
    if(debug)console.log('BEFORE', object);
    var parentString = '';
    var firstLevel = true;
    let flatObject = flattenObject(object, parentString, firstLevel);
    output.push(flatObject);
    if(debug)console.log('AFTER', flatObject);
  }

  return output;
}

function flattenObject (object, parentString, first) {
  var flatObject = {};
  /* iterate over object and check each prop against type */
  for(let propName in object) {
    //console.log(propName, typeof object[propName]);
    if(typeof object[propName] == "object") {
      if(debug)console.log("object : ", propName, object[propName]);
      if(first) {
        var flattendObject = flattenObject(object[propName], propName, false)
      } else {
        var flattendObject = flattenObject(object[propName], parentString+"_"+propName, false)
      }
      flatObject = Object.assign({}, flattendObject, flatObject);
    } else {
      if(debug)console.log("value : ", propName, object[propName]);
      if(first) {
        flatObject[propName] = object[propName]
      } else {
        flatObject[parentString+"_"+propName] = object[propName]
      }
    }
  }
  if(debug)console.log("applied: ", flatObject);
  return flatObject;
}
