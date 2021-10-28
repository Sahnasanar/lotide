
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
    console.log(result);
  }
  
  const assertArraysEqual = function (arr1, arr2) {
    if (arr1 === arr2) {
      console.log(`Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
    }
  };

  const middle = function(array) {
    let result = [];
       if (array.length <= 2 && array.length > 0) {
       return result;
      } else if (array.length % 2 === 0) {
        return result = [array[(array.length / 2) - 1], array[array.length / 2]];
      } else {
        return result = array[(array.length - 1) / 2];
      } 
  };
  console.log(middle([1, 2, 3, 4, 5, 6,7])) 

