//You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

//Finally, return the padded string.

function padIt(str, n) {
    let i = 0;
    while (i < n) {
      if (i % 2 === 0) {
        str = "*" + str; // Add * to the left side
      } else {
        str = str + "*"; // Add * to the right side
      }
      i++;
    }
    return str;
  }
  