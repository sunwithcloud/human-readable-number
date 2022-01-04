module.exports = function toReadable (number) {
    let firstNumber = ['', 'one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen', 'twenty'];

  let twoNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let threeNumber = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  if (number == 0)
    return 'zero';
  
  if (number > 0 && number < 21)
  {
    return firstNumber[number];
  }

  if (number >= 21 && number < 100)
  {

    let numberToString = number.toString();

    if (numberToString.length === 2)
    {
        if (firstNumber[numberToString[1]] == '')
        { 
            return twoNumber[numberToString[0]] + firstNumber[numberToString[1]] ;
        } 
        else return twoNumber[numberToString[0]] + ' ' + firstNumber[numberToString[1]] ;

    }

  }

  if (number >= 100 & number < 1000)
  {
    let numberToString = number.toString();

  if (numberToString.length === 3)
  {
     if (numberToString[1] == '0' && numberToString[2] == '0')
      {
          return threeNumber[numberToString[0]];
      }

      /*if (firstNumber[numberToString[2]] == '')
      {
          return threeNumber[numberToString[0]] + ' ' + toReadable(+(numberToString[1] + numberToString[2]));
      }*/

      else return threeNumber[numberToString[0]] + ' ' + toReadable(+(numberToString[1] + numberToString[2]));

  }

}
}
