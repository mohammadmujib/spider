function removeDuplicate(arr) {
  let nextDuplicate = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[nextDuplicate - 1] !== arr[i]) {
      arr[nextDuplicate] = arr[i];
      nextDuplicate += 1;
    }
    i += 1;
  }
  //   console.log(arr);

  return nextDuplicate;
}

// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

function removeElement(arr, key) {
  let nextElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = key;
      nextElement += 1;
    }
  }
  //   console.log(arr);
  return nextElement;
}

console.log(removeDuplicate([1, 1, 1, 2, 2, 3, 4]));
console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));
