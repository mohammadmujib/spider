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