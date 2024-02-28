//When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

//Return the bag after for loop finished.

function grabDoll(dolls) {
  var bag = [];

  for (var i = 0; i < dolls.length; i++) {
    var doll = dolls[i];

    if (doll === "Hello Kitty" || doll === "Barbie doll") {
      bag.push(doll);
    } else {
      continue;
    }

    if (bag.length === 3) {
      break;
    }
  }

  return bag;
}