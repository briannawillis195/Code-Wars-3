//fic the bugs in the following Kata

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}