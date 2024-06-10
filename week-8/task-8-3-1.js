function binarySearch(array, num) {
  let steps = 0;
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    steps++;
    
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === num) {
      return { index: mid, steps }
    } else if (array[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return { index: -1, steps };
};

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const number = 7;
console.log(binarySearch(myArray, number))

