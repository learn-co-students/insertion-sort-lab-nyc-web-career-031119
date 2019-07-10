// function findMinAndRemove(array){
//   if (array.legnth > 0){
//     let myArray = array.slice(1)
//     let firstValue = findMinAndRemove(myArray)
//     let secondValue = myArray[0]
//     if (firstValue < secondValue){
//       return firstValue
//     } else{
//       return secondValue
//     }
//   }else{
//     return array[0]
//   }
// }


// function findMinAndRemove(array){
//   let min = array[0]
//   let minIndex = 0
//   for(let i = 0; i < array.length; i++){
//     let currentElement = array[i]
//     if(array[i] < min){
//       min = array[i]
//       minIndex = i
//     }
//   }
//   array.splice(minIndex, 1);
//   return min;
// }


function findMinAndRemove(array){
  let minNum = array[0]
  let index = 0
  for(let i = 0; array.length > i ; i++){
    if (minNum > array[i]){
      minNum = array[i]
      index = i
    }
  }
    array.splice(index, 1)
    return minNum
}



function insertionSort(array){
  // sorts an unsorted array
  //take the array, run through findMinAndRemove(array) in a loop pushing into a new array
  let newArray = []
  let i = 0;
  while (array.length > i){
    newArray.push(findMinAndRemove(array))
  }
  return newArray
}
