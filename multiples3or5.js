function solution(number){
 if (number > 3) {
    let threeArray = [];
  let fiveArray = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      threeArray.push(i)
    }
  };
  for (let j = 0; j < number; j++) {
    if (j % 5 === 0) {
      fiveArray.push(j)
    }
  };
 
  for (let n =0; n < threeArray.length; n++) {
    for (let h = 0; h < fiveArray.length; h++) {
      if (threeArray[n] === fiveArray[h]) {
      threeArray.splice(n, 1);
    }
    }
  };

  let threeSum = threeArray.reduce(function (a, b) {return a+b});
  let fiveSum = fiveArray.reduce(function (a, b) {return a+b});
  let answer = (threeSum + fiveSum);
  
  return answer;
 } else {
   return 0;
 }
}

console.log(solution(3))