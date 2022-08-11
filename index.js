// your code goes here
function main() {
    let t = parseInt(readline());
    for (let i = 0; i < t; i++) {
      let k = parseInt(readline());
      let arr = readline().split(" ").map(Number);
  
      console.log(avaerageOfSubArray(k, arr));
    }
  }
  main();
  
  function avaerageOfSubArray(k, arr) {
    let result = [];
    let windowSum = 0;
    let windowStart = 0;
    for (let i = 0; i < arr.length; i++) {
      windowSum += arr[i];
      if (i >= k - 1) {
        result.push(windowSum / k);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  
    return result;
  }
  