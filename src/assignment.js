// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

/*
The function sumOfNumbers returns the sum of numbers in the arrayOfNumbers.
The for loop was used to iterate through the array and passed  10 posoitions (0 to 9) to the Counter variable.
An if statement was used to check if the value in the array is not a number, if true, the element is skipped.
*/
function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
    for (let counter = 0 ; counter < arrayOfNumbers.length ; counter++){
        if (isNaN(arrayOfNumbers[counter])){
            continue;
        }
        else {
            arrayOfNumbers[counter] =  arrayOfNumbers[counter];
        }
        sum += arrayOfNumbers[counter];
    }
    return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

/*
The function countEvenNumbers returns the number of even numbers in the arrayOfNumers.
The for loop was used to iterate through the array and passed  10 posoitions (0 to 9) to the Counter variable.
An if statement was used to check if the value in the array is not a number, if true, the element is skipped.
and an else if condition was used to check if the value of element in array is not an even number, if true, the element is skipped.
*/
function countEvenNumbers(arrayOfNumbers){
    let evenSum = 0;
    for (let evenCounter = 0; evenCounter < arrayOfNumbers.length; evenCounter++){
      if (isNaN(arrayOfNumbers[evenCounter])){
            continue;
        }
        else if (arrayOfNumbers[evenCounter] % 2 !== 0){
            continue;
        }
      else{
        evenSum++;
      }
    }
  return evenSum;
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

