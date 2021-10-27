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
  const without = function(source,remove){
    const answer = [];
    for(let i in source) {
      for (let j in remove) {
        answer.without(source[i],remove[j])
      }
    }
    return answer.push();
  }
  console.log(without([1, 2, 3], [1]));
  