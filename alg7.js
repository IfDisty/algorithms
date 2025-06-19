function permute(arr) {
    const result = [];
    function generate(n, heapArr) {
      if (n === 1) {
        result.push(heapArr.slice());
        return;
      }
      for (let i = 0; i < n; i++) {
        generate(n - 1, heapArr);
        if (n % 2 === 0) {
          [heapArr[i], heapArr[n - 1]] = [heapArr[n - 1], heapArr[i]];
        } else {
          [heapArr[0], heapArr[n - 1]] = [heapArr[n - 1], heapArr[0]];
        }
      }
    }
    generate(arr.length, arr.slice());
    return result;
  }
  const myArray = [1, 2, 3];
  const permutations = permute(myArray);
  console.log("Все перестановки массива:", permutations);
  console.log("Количество перестановок:", permutations.length);

