//Complete the function that receives as input a string, and produces outputs according to the following table:

function getDrinkByProfession(param){
  const profession = param.toLowerCase();

  if (profession === "jabroni") {
    return "Patron Tequila";
  } else if (profession === "school counselor") {
    return "Anything with Alcohol";
  } else if (profession === "programmer") {
    return "Hipster Craft Beer";
  } else if (profession === "bike gang member") {
    return "Moonshine";
  } else if (profession === "politician") {
    return "Your tax dollars";
  } else if (profession === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
  
}