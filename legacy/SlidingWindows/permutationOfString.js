
// Given a string and a pattern, find out if the string contains any permutation of the pattern.





function permutaionOfString(str, pattern) {
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

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1
            if (charFrequency[rightChar] === 0) {
                matched += 1
            }
        }
        if (matched === Object.keys(charFrequency).length) {
            return true
        }
        // shrink the window
        if (windowEnd >= pattern.length - 1) {
            const leftChar = str[windowsStart]
            windowsStart += 1
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1
                }
                charFrequency[leftChar] += 1
            }
        }
    }
    return false

}
console.log(permutaionOfString("oidcaf", "bc"))
console.log(permutaionOfString("odicf", "dc"))