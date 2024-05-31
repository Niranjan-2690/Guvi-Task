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

let isPalindrome = function(item) {
    // Convert the item to a string
    let str = item.toString();
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

let items = [121, "racecar", 12321, "hello", "madam", "world", 12345, "level"];

let palindromes = items.filter(isPalindrome);
console.log("Palindromes:", palindromes);
