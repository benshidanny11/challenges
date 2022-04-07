function getFinalOrder(amount, k) {
  const Q = [...Array(amount.length).keys()].map((i) => i + 1);
  const result = [];
  let curent = 0;

  while(Q.length>0){
  for (let i = 0; i < Q.length; i++) {
    if (amount[Q[i]- 1] - curent <= k) {
      result.push(Q.splice(i, 1)[0]);
    } else {
      curent =curent+k;
      Q.push(Q.splice(i, 1)[0]);
    }
  }
  }

  return result;
}

console.log(getFinalOrder([1,5,1,7],2));
//getFinalOrder([2, 5, 1], 2);
