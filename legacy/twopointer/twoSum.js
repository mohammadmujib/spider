function twoSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const cp = target - arr[i];
    if (cp in map) {
      return [map[cp], i];
    }
    map[arr[i]] = i;
  }
  return [-1, -1];
}

// function twoSum2(arr, target) {
//   let left = 1;
//   let right = arr.length;
//   while (left < right) {
//     const cp = arr[left] + arr[right];

//     if (cp === target) {
//       return [left, right];
//     }
//     if (target > cp) {
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }

//   return [-1, -1];
// }

console.log(twoSum([1, 2, 3, 4, 5, 6], 6)); // retuen index of two sum
// console.log(twoSum2([1, 2, 3, 4, 5, 6], 6)); // retuen index of two sum
