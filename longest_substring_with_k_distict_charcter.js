
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

function longestSubstring(str,k){
    let windowStart = 0
    let maxLength = 0
    const charFreq = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar  = str[windowEnd];
        if(!(rightChar in charFreq)){
            charFreq[rightChar] = 0
        }
        charFreq[rightChar]+=1
        while(Object.keys(charFreq).length > k){
            const leftChar = str[windowStart]
            charFreq[leftChar] -=1
            if(charFreq[leftChar] === 0){
                delete charFreq[leftChar]
            }
            windowStart+=1
        }
        maxLength = Math.max(maxLength,windowEnd-windowStart+1)
    }
    return maxLength
}
console.log(longestSubstring("araaci",3))