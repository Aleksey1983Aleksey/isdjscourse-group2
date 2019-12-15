
function multiplicity() {
  let number = 1;
  while (number <= 100) {
    if ((number % 5 === 0) && (number % 3 === 0)) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
    number += 1;
  }
}

function isPalindrom(someText) {
  const tempStr = someText.toString().toLowerCase();
  for (let i = 0; i < tempStr.length / 2; i++) {
    if (tempStr[i] !== tempStr[tempStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

multiplicity();
console.log(isPalindrom('Racecar'));
console.log(isPalindrom('Car'));
console.log(isPalindrom(234432));
console.log(isPalindrom(23456));