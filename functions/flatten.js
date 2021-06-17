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

  /* iterate over each object, build a new object
    flatten all the levels of children for values that are arrays or objects
    */
  for(let object of input) {
    var parentString = '';
    let flatObject = flattenObject(object, parentString);
  }


  //return input;
}

function flattenObject (object, parentString) {
  var flatObject = {};
  /* iterate over object and check each prop against type */
  for(let propName in object) {
    //console.log(propName, typeof object[propName]);
    if(typeof object[propName] == "object") {
      console.log("object : ", propName, object[propName]);
      var flattendObject = flattenObject(object[propName], parentString+"_"+propName)
      flatObject = Object.assign({}, flattendObject, flatObject);
    } else if (typeof object[propName] == "array") {
      console.log("array : ", propName, object[propName]);
    } else {
      flatObject[propName] = object[propName]
    }
  }
  console.log("applied: ", flatObject);
}
