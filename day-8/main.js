function solution(total) {
    const tempArr = new Array(total)

    const result = Array.from(tempArr.keys()).filter(item => {
        return item % 5 === 0 || item % 3 === 0
    }).reduce((total, current) => {
        return total + current
    }, 0)

    return result
}


console.log(solution(50), solution(20), solution(1))