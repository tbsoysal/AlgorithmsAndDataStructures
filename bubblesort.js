// Bubble Sort Algorithm
const bubbleSort = (arr) => {
  const n = arr.length - 1; // Get the length of the array minus one
  for(let i = 0; i < n; i++){ // Outer loop to control the number of passes
    let swapped = false; // Flag to check if any swapping happened in the inner loop
    for(let j = 0; j < n - i; j++){ // Inner loop to compare adjacent elements
      if (arr[j] > arr[j+1]){ // If the current element is greater than the next element
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swap the elements
        swapped = true; // Set the flag to true indicating a swap happened
      }
    }
    if (!swapped) // If no swapping happened, the array is already sorted
      break; // Break out of the loop
  }
  return arr; // Return the sorted array
}

const arr = [5, 8, 4, 2, 9, 3]; // Sample array to be sorted
console.log(bubbleSort(arr)); // Output the sorted array
