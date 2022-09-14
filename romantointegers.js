var romanToInt = function(s) {
    var simbolsValues={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    
    let intValue=0;
    for(let j=0;j<Object.keys(simbolsValues).length;j++){
    for(let i=0;i<s.length;i++){
            if(s[i]===Object.keys(simbolsValues)[j]){
               if(s.charAt(i)=='V' && s.charAt(i-1)=='I'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-2;
               }else if(s.charAt(i)=='X' && s.charAt(i-1)=='I'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-2;
               }
               else if(s.charAt(i)=='L' && s.charAt(i-1)=='X'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-20;
               }
               else if(s.charAt(i)=='C' && s.charAt(i-1)=='X'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-20;
               }
               else if(s.charAt(i)=='D' && s.charAt(i-1)=='C'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-200;
               }
               else if(s.charAt(i)=='M' && s.charAt(i-1)=='C'){
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]-200;
               }
               else{
                intValue+=simbolsValues[Object.keys(simbolsValues)[j]]
               }
            }
       }
    }
    console.log(intValue);
    
};
