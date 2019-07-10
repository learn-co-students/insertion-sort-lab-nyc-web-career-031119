
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
