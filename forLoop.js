//The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

function pickIt(arr) {
    var odd = [], even = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]); // Push even number to even array
      } else {
        odd.push(arr[i]); // Push odd number to odd array
      }
    }
    
    return [odd, even];
  }
  