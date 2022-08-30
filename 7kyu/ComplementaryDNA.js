function solution(str){
  
  
  console.log(str.length);
	if(!(str.length % 2 === 0)) {
  
    str += '_';
  }
  
  return str.match(/.{1,2}/g);
}

console.log(solution('abcd'));