function mergeSortedArrays(array1, array2) {
    // New merged array
    //[2, 5, 8, 11], [3, 6, 6, 19, 20]
    const mergedArray = [];
    let termArr1 = array1[0];
    let termArr2 = array2[0];
    let i = 0; j = 0;
    while (termArr1 || termArr2) {
        console.log(termArr1,termArr2);
        if (!termArr2||termArr1 < termArr2) {
            mergedArray.push(array1[i]);
            termArr1 = array1[i+1];
            i++;
        }
        else{
            mergedArray.push(array2[j]);
            termArr2 = array2[j+1];
            j++;
        }
    }
    return mergedArray;
}
console.log(mergeSortedArrays([2, 5, 8, 11], [3, 6, 6, 19, 20]))