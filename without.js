
  
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

  const without = function(source, removeItem) {
      let result = [];
      for (let i in source) {
        if (!removeItem.includes(source[i])) {
          result.push(source[i]);
        }
      }
      return result;
    };
    
  console.log(without([1, 2, 3], [1]));
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
  