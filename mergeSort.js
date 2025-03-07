function mergeSort(arr) {
  // base case
  if (arr.length == 1) return arr;

  //recursive case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
        sortedArray.push(right[rightIndex]);
      rightIndex++;
    } else {
        sortedArray.push(left[leftIndex]);
      leftIndex++;
    }
  }

  
  while (leftIndex < left.length) {
    sortedArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    sortedArray.push(right[rightIndex]);
    rightIndex++;
  }
  return sortedArray;
}

let badArray = [9,12,4,13,100,200,99,1]
console.log(badArray)
let goodArray = mergeSort(badArray)
console.log(goodArray)