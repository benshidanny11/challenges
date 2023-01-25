

// 1* 2 * 3 * ....n
let fact=1;
function factorial(n){

    if (n==1){
        return fact;
    }
    fact=fact*n;
    return factorial(n-1);
}
console.log(factorial(4))