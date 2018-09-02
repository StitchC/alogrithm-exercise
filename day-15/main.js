const arr = [1, 2, [3, 4, 5,[6, 7, [8, 9, 10, [11, 12, 13]]]]]

function flat(arr) {
    const result = []

    const iterator = function(arr) {
        arr.forEach(item => {
          if(Array.isArray(item)) {
              iterator(item)
          } else {
              result.push(item)
          }  
        })
    }

    iterator(arr)

    return result
}

// const arr2 = [1, 2, 3, 4, ...[1, 2, 3]]
// console.log(arr2)
console.log(flat(arr))

