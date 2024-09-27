const arr = [1,2,3,4,5]

const maiorQue3 = arr.find((element) => element > 3)

const indiceMaiorQue3 = arr.findIndex(e => e>3)

console.log(arr.some(x=> x>3))

console.log(arr.every(x=> x>0))

console.log(arr.every(x=> x>3))