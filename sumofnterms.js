//Sn = n/2 (a1 + an)

function nthSum(n){
    let a1=1
    let d=1;
    const sn=n/2*(2*a1+(n-1)*d);
   return sn; 
}
console.log(nthSum(10))