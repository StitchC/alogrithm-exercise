const str = 'abcdezxy'

function fn(str) {
    const arr = str.split('')

    const result = arr.map((item, index) => {
        if(index > 0) {
            return '-' + item.toUpperCase().padEnd(index + 1, item)
        }else {
            return item.toUpperCase().padEnd(index + 1, item)
        }
    }).join('')

    return result
}


const result = fn(str)

console.log(result)