const str = '5 2 1 3 7 4 9'

function fn(str) {
    const arr = str.split(' ')

    return `minima = ${Math.min(...arr)}, maxima = ${Math.max(...arr)}`
}

const result = fn(str)

console.log(result)