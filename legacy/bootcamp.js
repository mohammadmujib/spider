array = "7 1 8 2 7 6 4 1 9 1".split(" ").map(Number);
X = 6;
n = array.length;

bootcamps = 0;
array.sort((a, b) => b - a);
target = 2 * X; //12
done = false;
i = 0;
len = 1;
console.log(array);

while (!done) {
  bootcampArray = array.slice(i, i + len);
  minEle = bootcampArray[len - 1];
  if (minEle * len > target) {
    bootcamps += 1;
    i += len;
    console.log("success: ", bootcampArray);
  } else {
    len += 1;
  }
  if (i + len > n) {
    done = true;
  }
}
console.log(bootcamps);

// https://codeshare.io/VZQeEz
