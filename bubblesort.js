const bubbleSort = (arr) => {
  const n = arr.length - 1;
  for(let i = 0; i < n; i++){
    let swapped = false;
    for(let j = 0; j < n - i; j++){
      if (arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped)
      break;
  }
  return arr;
}

const arr = [5, 8, 4, 2, 9, 3];
console.log(bubbleSort(arr));
