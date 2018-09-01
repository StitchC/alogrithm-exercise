const str1 = 'xxoo'
const str2 = 'xozdfdafxofsadfxx'
const str3 = 'fsadfsadfa24r'

function fn(str) {
    return (str.match(/o/ig) || []).length === (str.match(/x/ig) || []).length
}

const result1 = fn(str1)
const result2 = fn(str2)
const result3 = fn(str3)

console.log(result1, result2, result3)