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
    console.log(result);
  }


const letterPositions = function(sentence) {
  let results = {};
  for(let letter of sentence){
    if(results[letter] ) {
      results[letter]++
    }else {
      results[letter]=1
    }
    }
  return results;
};
console.log(letterPositions("lighthouseinthehouse"));