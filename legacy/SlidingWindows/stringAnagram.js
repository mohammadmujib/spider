// Given a string and a pattern, find all anagrams of the pattern in the given string.


// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// // Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".


// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

function stringAnagram(str,pattern) {
    // our goal is to matched all charcter from charcterfrequecy with currrent windows
    // try to extend range
    let windowsStart = 0
    let matched = 0
    const charFrequency = {}
    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i]
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0
        }
        charFrequency[chr] += 1
    }

    const resulutIndices = []
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // decreemnt the matched charcyter
            charFrequency[rightChar] -= 1
            if (charFrequency[rightChar] === 0) {
                matched += 1
            }
        }
        if (matched === Object.keys(charFrequency).length) {
            // we have found an anagram
            resulutIndices.push(windowsStart)
        }
        // shrink the window
        if (windowEnd >= pattern.length - 1) {
            const leftChar = str[windowsStart]
            windowsStart += 1
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1 // before putting the back decrement the matched count
                }
                charFrequency[leftChar] += 1 // put the character back
            }
        }
    }
    return resulutIndices
}

console.log(stringAnagram("ppqp", "pq")) //[1,2]
console.log(stringAnagram("abbcabc", "abc")) //[2,3,4]