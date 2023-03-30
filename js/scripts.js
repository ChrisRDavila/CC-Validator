//Business Logic
 
function validator(number) {
  let numberArray = number.split(" ");
  console.log(numberArray);
  returnArray = [];
  numberArray.forEach(element => {
  if (!Number(element)) {
   returnArray.push(false);
  } else {
    returnArray.push(true);
  }
  });
  console.log(returnArray);
  if (returnArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

function lengthChecker(number) {
  const numberArray = number.split(" ");
  const numberString = numberArray.join("");
  return numberString.length;
}
