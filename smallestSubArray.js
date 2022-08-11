
// Given an array of positive numbers and a positive number ‘S’, 
// find the length of the smallest contiguous subarray whose sum is 
// greater than or equal to ‘S’. Return 0, if no such subarray exists.



arr = [3, 4, 1, 1, 6]
S=8 
function smallestSubArray(arr,s){
    let windowStart = 0
    let windowSum = 0
    let minLength = Infinity
    for(let windowEnd=0;windowEnd<arr.length;windowEnd++){
        windowSum+=arr[windowEnd]
        while(windowSum>=s){
            minLength = Math.min(minLength,windowEnd-windowStart+1)
            windowSum-=arr[windowStart]
            windowStart+=1
        }
    }
    if(minLength===Infinity){
        return 0
    }

    return minLength
}
console.log(smallestSubArray(arr,S))