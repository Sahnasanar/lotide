const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  result = {};
  for(let letter of string){
    if(result[letter] ) {
      result[letter]++
    }else {
      result[letter]=1
    }
    }
     return result;
  }
  console.log(countLetters("lhl"));