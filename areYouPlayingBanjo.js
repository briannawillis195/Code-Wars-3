//Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo

function areYouPlayingBanjo(name) {
  // Implement me
  if(name.startsWith('R') || name.startsWith('r')){
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
  
}