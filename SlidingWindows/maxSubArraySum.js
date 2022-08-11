
k = 2
arr = [2, 3, 4, 1, 5]

function maxSubArray(k,arr){
    let maxSum  = -Infinity
    let windowSum = 0
    let windowStart = 0
    for(let i=0;i<arr.length;i++){
        windowSum+=arr[i]
        if(i>=k-1){
            maxSum = Math.max(maxSum,windowSum)
            windowSum-=arr[windowStart]
            windowStart+=1
        }
    }
    return maxSum
}
console.log(maxSubArray(k,arr))