const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function reverse(A) {
    
    const len = A.length
    for(let i = 0; i < (len - 1) / 2; i++) {
        let temp = A[len - (i + 1)]
        A[len - (i + 1)] = A[i]
        A[i] = temp

    }
    
}


reverse(arr)

console.log(arr)