function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  const numbers = [3, 7, 2, 9, 4];
console.log("Максимальное число:", findMax(numbers));

