
 var longestCommonPrefix = function (strs) {

    let prefix = strs.reduce((acc, str) => {
       return str.length < acc.length ? str : acc
    });
    
    for (let str of strs) {
        
        while (str.slice(0, prefix.length) != prefix) {
            console.log(prefix)
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;

  };

let strs = ["lower", "flowerr", "pflight"];
console.log(longestCommonPrefix(strs));
