//The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
  if (power === 0){
    return 1
  }
    
    let result = 1
    for(let i=0; i < power; i++){
      result *= number
    }
    return result
  }