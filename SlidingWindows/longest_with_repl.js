// Problem Statement #
// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
//  find the length of the longest substring having the same letters after replacement.

// Example 1:

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

function longestSubstring(str,k){
    let windowsStart = 0
    let maxLength = 0
    let maxLetterCount = 0
    let frequencyMap = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!(rightChar in frequencyMap)){
            frequencyMap[rightChar] = 0
        }
        frequencyMap[rightChar] +=1
        maxLetterCount = Math.max(maxLetterCount,frequencyMap[rightChar])
        // console.log(maxLetterCount)
        if((windowEnd-windowsStart+1-frequencyMap[rightChar])>k){
            const leftChar = str[windowsStart]
            frequencyMap[leftChar] -=1
            console.log("hi",windowsStart)
            windowsStart+=1

        }

        // console.log(frequencyMap)
        maxLength  = Math.max(maxLength,windowEnd-windowsStart+1)
    }
    return maxLength
}
console.log(longestSubstring("aaabccbb",2))