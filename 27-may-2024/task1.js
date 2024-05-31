// Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array

    var arrAno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oddNumbers = function (oddNumber){
        let result = []
        oddNumber.forEach((ele)=>{
            if(ele % 2 !==0){
                result.push(ele)
            }
        })
        return result
    }
    console.log(oddNumbers(arrAno))
//------------------------------------------------------------------------------
    var arrIIFE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    (function (oddNumber){
        let result = []
        oddNumber.forEach((ele)=>{
            if(ele % 2 !==0){
                result.push(ele)
            }
        })
        return result
    })
    console.log(oddNumbers(arrIIFE))

//--------------------------------------------------------------------------------------

// b. Convert all the strings to title caps in a string array

    let titles = ["Captain America", "Iron Man", "Spider Man", "Black Panther"]
    let initialCapLetter = function(titles){
        return titles.map((initialLetter) => {
            return initialLetter.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
        })
    }
    console.log(initialCapLetter(titles))
//----------------------------------------------------------------------------------
    let titlesIIFE = ["Captain America", "Iron Man", "Spider Man", "Black Panther"]
    let initialCapLetterIIFE = (function(titlesIIFE){
        return titlesIIFE.map((initialLetter) => {
            return initialLetter.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
        })
    })
    console.log(initialCapLetterIIFE(titlesIIFE))

//--------------------------------------------------------------------------------------

// c.  Sum of all numbers in an array

    let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let sumNumbers = function(number){
        let value = 0; 
        for (let x = 0; x < number.length; x++){
            value += number[x]
        }
        return value
    }
    console.log(sumNumbers(sum))

//------------------------------------------------------------------------------
    let sumIIFE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let sumNumbersIIFE = (function(number){
        let value = 0; 
        for (let x = 0; x < number.length; x++){
            value += number[x]
        }
        return value
    })
    console.log(sumNumbersIIFE(sum))

//--------------------------------------------------------------------------------

// d. Return all the prime numbers in an array

    let isPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let prime = function(priNumbers){
        if(priNumbers <= 1){
            return false
        }if(priNumbers === 2){
            return true
        }if(priNumbers % 2 ===0){
            return false
        }for(let i = 3; i<Math.sqrt(priNumbers); i +=2){
            if(priNumbers % i === 0){
                return false
            } 
        }return true
    }
    let primeNumbers = isPrime.filter(prime);
    console.log("Prime numbers:", primeNumbers);

//------------------------------------------------------------------------------

    let isPrimeIIFE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let primeIIFE = (function(priNumbersIIFE){
        if(priNumbersIIFE <= 1){
            return false
        }if(priNumbersIIFE === 2){
            return true
        }if(priNumbersIIFE % 2 ===0){
            return false
        }for(let i = 3; i<Math.sqrt(priNumbersIIFE); i +=2){
            if(priNumbersIIFE % i === 0){
                return false
            } 
        }return true
    })
    let priNumbersIIFE = isPrime.filter(primeIIFE);
    console.log("Prime numbers:", priNumbersIIFE);

//------------------------------------------------------------------------------------------

// e. Return all the palindromes in an array

let palinDrome = [123, "racecar", 121, "level", "Water", "hello", "madam"]

let palinDromes = function(input){
    let inp = input.toString();
    return inp === inp.split('').reverse().join('')
}
let output = palinDrome.filter(palinDromes)

console.log("Palindrome:", output)

//------------------------------------------------------------------------------
let palinDromeIIFE = [123, "racecar", 121, "level", "Water", "hello", "madam"]

let palinDromesIIFE = function(input){
    let inp = input.toString();
    return inp === inp.split('').reverse().join('')
}
let outputIIFE = palinDromeIIFE.filter(palinDromesIIFE)

console.log("Palindrome:", outputIIFE)

//--------------------------------------------------------------------------------------------

// f. Return median of two sorted arrays of the same size

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = function findMedianSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    let mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

console.log("Median:", median(arr1, arr2)); 

//------------------------------------------------------------------------------
let arrs1 = [1, 3, 5];
let arrs2 = [2, 4, 6];

let medians = (function findMedianSortedArrays(arrs1, arrs2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arrs1.length && j < arrs2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arrs1[i]);
            i++;
        } else {
            merged.push(arrs2[j]);
            j++;
        }
    }

    while (i < arrs1.length) {
        merged.push(arrs1[i]);
        i++;
    }

    while (j < arrs2.length) {
        merged.push(arrs2[j]);
        j++;
    }

    let mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})

console.log("Median:", medians(arrs1, arrs2)); 

//--------------------------------------------------------------------------

// g. Remove duplicates from an array

let values = [1, 2, 2, 3, 3, 4, 4, 5];

let duplicates = function(arr) {
    return [...new Set(arr)];
}
let result = duplicates(values);
console.log(result);

//------------------------------------------------------------------------------
let valuesIIFE = [1, 2, 2, 3, 3, 4, 4, 5];

let duplicatesIIFE = function(arr) {
    return [...new Set(arr)];
}
let resultIIFE = duplicatesIIFE(values);
console.log(resultIIFE);

//----------------------------------------------------------------------------

// h. Rotate an array by k times

let array = [1, 2, 3, 4, 5, 6, 7];
let ktimes = 3;

let rotate = function rotateArray(arr, k) {
    ktimes = ktimes % arr.length;
    return arr.slice(-ktimes).concat(arr.slice(0, -ktimes));
}

let rotatedArray = rotate(array, ktimes);
console.log(rotatedArray); 

//------------------------------------------------------------------------------
let arrayIIFE = [1, 2, 3, 4, 5, 6, 7];
let ktimesIIFE = 3;

let rotateIIFE = (function rotateArray(arr, k) {
    ktimesIIFE = ktimesIIFE % arr.length;
    return arr.slice(-ktimesIIFE).concat(arr.slice(0, -ktimesIIFE));
})

let rotatedArrayIIFE = rotate(array, ktimesIIFE);
console.log(rotatedArray); 