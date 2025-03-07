function mergeSort(arr) {
    // base case
    if (arr.length = 1)
        return;


}

// if there's one, return
// else split it, and run mergeSort on the children
// run slice(0, (length - (length % 2 == 1 ? 1 : 0))/2)
// and run slice((length - (length % 2 == 1 ? 1 : 0))/2 + 1)
// take each return, and merge them