function findLongestSubstring(str){
    let longest = 0;
    let start = 0;
    let seen = {};
    let i = 0;

    while(i < str.length){
        let char = str[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }

        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
        console.log(`char: ${char} seen: ${JSON.stringify(seen)}, i: ${i}, start: ${start}, longest: ${longest}`);
        i++;
    }

    return longest;
}

console.log(findLongestSubstring('rithmschool'))// 7
console.log(findLongestSubstring('thisisawesome'));// 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisisshowwedoit')); // 6