function pair(n, arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % 2 === 0) {
        res.push([i, j]);
      }
    }
  }
  if (res.length === n) {
    return "YES";
  } else {
    return "NO";
  }
}

let t = readline();

for (let i = 0; i < t; i++) {
  let n = readline();
  let arr = readline().split(" ").map(Number);
  console.log(pair(n, arr));
}
