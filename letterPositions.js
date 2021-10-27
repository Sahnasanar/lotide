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