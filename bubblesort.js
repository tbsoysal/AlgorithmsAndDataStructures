const bubbleSort = (arr) => {
  // get length of the array minus 1 (loop index starts from 0 thats why minus 1)
  const n = arr.length - 1;
  // this outter loop ensures checking the array items again and again
  for(let i = 0; i < n; i++){
    // this variables will check if array is already sorted
    let swapped = false;
    // this loop ensures checking all the elements and swaps if needed 
    for(let j = 0; j < n - i; j++){
      if (arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    // if already sorted exit loop
    if (!swapped)
      break;
  }
  // return sorted array
  return arr;
}

const arr = [5, 8, 4, 2, 9, 3];
console.log(bubbleSort(arr));
