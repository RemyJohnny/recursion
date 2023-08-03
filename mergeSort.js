/* eslint-disable no-plusplus */

function merge(leftHalf, rightHalf) {
  const output = [];
  let i = 0; // left Index pointer
  let j = 0; // right Index pointer
  while (i < leftHalf.length && j < rightHalf.length) {
    // copy the smallest to the output array
    if (leftHalf[i] < rightHalf[j]) {
      output.push(leftHalf[i]);
      i++;
    } else {
      output.push(rightHalf[j]);
      j++;
    }
  }

  // copy all the remaining element in left-Half Array to the output array

  for (i; i < leftHalf.length; i++) {
    output.push(leftHalf[i]);
  }
  // copy all the remaining element in right-Half Array to the output array

  for (j; j < rightHalf.length; j++) {
    output.push(rightHalf[j]);
  }
  return output;
}

function mergeSort(arr) {
  if (arr.length === 0) return "This array is empty";
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.ceil(arr.length / 2); // finds the middle of the array
  const leftHalf = arr.splice(0, middleIndex); // first half of the array
  const rightHalf = arr.splice(-middleIndex); // second half of the array

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
console.log(mergeSort([6, 2, 9, 4, 1, 8, 3, 5, 7, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort(["D", "A", "C", "B"])); // [ 'A', 'B', 'C', 'D' ]
