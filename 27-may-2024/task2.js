// Do the below programs in arrow functions

// a. Print odd numbers in an array

var arrAno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = (oddNumber)=>{
    let result = []
    oddNumber.forEach((ele)=>{
        if(ele % 2 !==0){
            result.push(ele)
        }
    })
    return result
}
console.log(oddNumbers(arrAno))

//--------------------------------------------------------------------------------------

// b. Convert all the strings to title caps in a string array

let titles = ["Captain America", "Iron Man", "Spider Man", "Black Panther"]
let initialCapLetter = (titles)=>{
    return titles.map((initialLetter) => {
        return initialLetter.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
    })
}
console.log(initialCapLetter(titles))

//--------------------------------------------------------------------------------------

// c.  Sum of all numbers in an array

let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumNumbers = (number)=>{
    let value = 0; 
    for (let x = 0; x < number.length; x++){
        value += number[x]
    }
    return value
}
console.log(sumNumbers(sum))

//--------------------------------------------------------------------------------

// d. Return all the prime numbers in an array

let isPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let prime = (priNumbers)=>{
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

//------------------------------------------------------------------------------------------

// e. Return all the palindromes in an array

let palinDrome = [123, "racecar", 121, "level", "Water", "hello", "madam"]

let palinDromes = (input)=>{
let inp = input.toString();
return inp === inp.split('').reverse().join('')
}
let output = palinDrome.filter(palinDromes)

console.log("Palindrome:", output)
