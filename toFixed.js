function howManySmaller(arr, n) {
  // Round all elements in the array to two decimal places
  var roundedArr = arr.map(function(num) {
    return Number(num.toFixed(2));
  });

  // Count the number of elements smaller than n
  var count = 0;
  for (var i = 0; i < roundedArr.length; i++) {
    if (roundedArr[i] < n) {
      count++;
    }
  }

  return count;
}
