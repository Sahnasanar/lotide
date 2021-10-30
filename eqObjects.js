const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1,arr2) {
  var result  = "";
  for(let i in arr1){
    for(let j in arr2) {

    if(arr1[i] === arr2[j]){
      result = "true"
    }else {
      result = "false"
    }
  }
}
    return result;
  }
  const eqObjects = function (object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else {
      for (let i in object1) {
        if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
          if (eqArrays(object1[i], object2[i]) === false) {
            return false
          }
        } else {
          if (object1[i] !== object2[i]) {
            return false;
          }
        }
      }
      return true;
    }
  }
  
  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false