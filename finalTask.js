// ----------------Solve any 7 question  using Javascript--------------------//

// -------------->  Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reversedStr = (inputStr) =>{
    let newStr = "";
    for (let i = inputStr.length - 1; i>=0; i--){
        newStr = newStr + inputStr[i]
    }
    return newStr
}


let input = reversedStr('Rejaul Islam')
console.log(input);


// --------------> Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumPositiveNum  = (arr) =>{
    let totalPositiveNum = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > 0){
        totalPositiveNum += arr[i]
      }
       
    }
    return totalPositiveNum; 
}

let inputArray = [2, -5, 10, -3, 7]
let result = sumPositiveNum(inputArray)
console.log(result);



// --------------> Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentelement(arr) {
  // Create a map to store the frequency of each element
  const frequencyMap = new Map();

  // Loop through the array and count the occurrences of each element
  arr.forEach(element => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });

  // Find the element with the highest frequency
  let mostFrequentelement;
  let highestFrequency = 0;

  frequencyMap.forEach((frequency, element) => {
    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      mostFrequentelement = element;
    }
  });

  return mostFrequentelement;
}

const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentelement(inputArr);


console.log(mostFrequent); 


// --------------> Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
// */

const findIndices = (array, target) => {
    const result = []
    for (let item of array) {
        let remain = target - item;
        if (array.includes(remain)) {
            result.push(array.indexOf(item))
            result.push(array.indexOf(remain))
            break;
        }
    }
    return result
}

console.log(findIndices([1, 3, 6, 8, 11, 15], 9))


// --------------> Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
// */
const calculator = (x, y, operator) => {
    if (operator === '+') return x + y;
    if (operator === '-') return x - y;
    if (operator === '*') return x * y;
    if (operator === '/') return x / y;
}
console.log(calculator(5,3,'+'));
console.log(calculator(5,3,'-'));
console.log(calculator(5,3,'*'));
console.log(calculator(5,3,'/'));




// --------------> Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
// */

//It will return minimum 4 length password and maximum with the provided length
const passwordGenerator = length => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChar = '~!@#$%^&*-_';
    const allChar = uppercase + lowercase + numbers + specialChar;
    let password = '';

    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length))
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length))
    password += numbers.charAt(Math.floor(Math.random() * numbers.length))
    password += specialChar.charAt(Math.floor(Math.random() * specialChar.length))

    while (password.length < length) {
        console.log(password);
        password += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }

    return password;
}

console.log(passwordGenerator(8))


//  --------------> Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallest = array =>{
    const sortedArray = array.sort((a,b) => a-b)
    return sortedArray[1]
}
console.log(findSecondSmallest([4,6,9,2,3,8]))