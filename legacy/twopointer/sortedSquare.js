function sortedSquare(arr) {
  const n = arr.length;
  const result = Array(n).fill(0);
  let highestIdx = n - 1;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const leftSqaure = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];
    if (leftSqaure > rightSquare) {
      result[highestIdx] = leftSqaure;
      left += 1;
    } else {
      result[highestIdx] = rightSquare;
      right -= 1;
    }
    highestIdx -= 1;
  }

  return result;
}
console.log(sortedSquare([0, 1, 4, 4, 9]));
console.log(sortedSquare([0, 1, 1, 4, 9]));
