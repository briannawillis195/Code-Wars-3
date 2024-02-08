//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

function spEng(sentence){
//write your code here
  if(sentence.toLowerCase().includes('english')){
    return true
  }else{
    return false
  }
}