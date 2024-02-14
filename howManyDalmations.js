//By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

function howManyDalmatians(number){
  if (number <= 10) {
    return "Hardly any"
  } else if (number <= 50) {
    return "More than a handful!"
  } else if (number === 101) {
    return "101 DALMATIANS!!!"
  } else {
    return "Woah that's a lot of dogs!" 
  }
}