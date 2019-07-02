function findMinAndRemove(array){
  let length = array.length
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < length; i++){
    if(array[i] < min){
      min = array[i]
      minIndex = 1
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let newMin
  let sorted = []
  while (array.length !== 0 ){
    newMin = findMinAndRemove(array)
    if(!sorted.includes(newMin)){
    sorted.push(newMin)}
  }
  return sorted
}
