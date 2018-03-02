function theBeatlesPlay(musicians, instruments){
  results = [];
  for( i = 0; i < musicians.lenghth; i++){
    results.push(musicians[i] +" plays "+ instruments[i])
  }
}

function johnLennonFacts(facts){
  results = []
  while( facts.length > 0 ){
    results.push(facts.pop()+"!!!")
  }
  return results;
}