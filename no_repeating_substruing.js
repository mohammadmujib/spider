function noReapeatSubstring(str){
    let windowStart = 0
    let maxLength = 0
    const map = {}
    for(let windowEnd=0;windowEnd<str.length;windowEnd++){
        const rightChar = str[windowEnd]
        if(rightChar in map){
            windowStart = Math.max(windowStart, map[rightChar] +1)
        }
        map[rightChar] = windowEnd
        maxLength =  Math.max(maxLength,windowEnd-windowStart+1)
    }
    return maxLength
}