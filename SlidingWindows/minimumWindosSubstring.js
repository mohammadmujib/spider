function findSubstring(str, pattern){
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
            if (charFrequency[rightChar] >= 0) { // count every matching of charcter
                matched += 1
            }
        }
        if (matched === Object.keys(charFrequency).length) {
            // we have found an anagram
            resulutIndices.push(windowsStart)
        }
        // shrink the window if we can can, finish as soon as we remove a matched charcter
        while(matched === pattern.length){
            if()
        }

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