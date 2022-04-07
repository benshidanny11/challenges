let prev=0,curr=1;
let next=prev+curr;
function fibonachii(n){
   if(n==1){
       return next;
   }
   //const temp=next;
   next=prev+curr;
   prev=curr;
   curr=next;
   return fibonachii(n-1);
}

console.log(fibonachii(8))