function selectionSort(numbers){
 let len=numbers.length
 for(let i=0;i<numbers.length;i++){
    let min=i;
    
     for(let j=i+1;j<numbers.length;j++){
      if(numbers[j]<numbers[min]){
       min=j;
      }
     }

       if (min != i) {
             // Swapping the elements
             let temp=numbers[i]
             numbers[i]=numbers[min];
             numbers[min]=temp;   
        }
    
 }
 return numbers; 
}

const numbers=[9,3,5,1,4,32,6,4,8]

console.log(selectionSort(numbers));