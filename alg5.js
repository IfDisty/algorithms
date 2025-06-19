function sumOfPairs(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        sum += arr[i] + arr[j];
      }
    }
    return sum;
  }
  const myArray = [1, 2, 3, 4];
console.log(sumOfPairs(myArray));
