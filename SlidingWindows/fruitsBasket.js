function fruitBasket(str){
    let windowStart =0
    let maxLength = 0
    let map = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in map)){
            map[rightChar] = 0
        }
        map[rightChar] +=1
        while(Object.keys(map).length >2){
            const leftChar = str[windowStart]
            map[leftChar] -=1
            if(map[leftChar] ===0 ){
                delete map[leftChar]
            }
            windowStart+=1
        }
        maxLength = Math.max(maxLength,windowEnd-windowStart+1)
    }
    return maxLength

}
console.log(fruitBasket(['A','B','C','A','C']))



function main(arr){
    let windowStart = 0
    let maxLength = 0
    let map = {}
    for(windowEnd=0 ; windowEnd<arr.length;windowEnd++){
        const rightChar = arr[windowEnd]
        if(!(rightChar in map)){
            map[rightChar] = 0
        }
        map[rightChar] +=1
        while(Object.keys(map).length>2){
            const leftChar = arr[windowStart]
            map[leftChar] -=1
            if(map[leftChar] ===0){
                delete map[leftChar]
            }
            windowStart+=1
        }
        maxLength = Math.max(maxLength,windowEnd-windowStart+1)
    }
    return maxLength

}

function smallest(arr,s){
    let windowStart = 0
    let windowSum =0
    minLength = Infinity
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while(windowSum>=s){
            minLength = Math.min(minLength,windowEnd-windowStart+1)
            windowSum-=arr[windowStart]
            windowStart+=1
        }
        
    }
}
function maxSubstring(str){
    let windowsStart= 0
    let maxLength = 0
    let map = {}
    for(windowEnd=0;windowEnd<str.length;windowEnd++){
        const rightChar = str[windowEnd]
        if(rightChar in map){
            windowsStart = Math.max(windowsStart, map[rightChar]+1)
        }
        map[rightChar] = windowEnd
        maxLength  = Math.max(maxLength,windowEnd-windowsStart+1)
    }
    return maxLength
}