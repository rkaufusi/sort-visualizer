export default function bubbleSort(array) {
	let unSorted = true
	let count = array.length
 	while(unSorted){
		for(let i = 0; i < array.length; i++){
			if(array[i] > array[i + 1]){
				swap(i, i + 1, array)
			}
		}
		count--
		if(count === 0) unSorted = false
	}
  return array;
}
const swap = (i, j, array) => {
	let temp = array[j]
	array[j] = array[i]
	array[i] = temp
}