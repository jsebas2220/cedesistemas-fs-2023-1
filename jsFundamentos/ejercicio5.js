// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumaImpares = 0;
// let tamano = numeros.length

// for (let i = 0; i < tamano; i ++){
//   if (numeros[i] % 2 === 1){
//     sumaImpares = sumaImpares + i;
//   }
// }

// console.log (sumaImpares)

const sum20odd = (oddLimitNumber) => {
  let sum = 0;
  for (let i = 1; i < oddLimitNumber; i += 2){
      sum += i
  }
  return sum;
}

console.log(oddLimitNumber())



const sum20oddV2 = (firstOddNumber) => {
  let sum = 0;
  for (let i = 0; i < firstOddNumber; i ++ ){
      let nextOddNumber = i * 2 +1
      sum += nextOddNumber
  }
  return sum;
}

console.log(sum20oddV2())

  