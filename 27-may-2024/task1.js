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

//b. Convert all the strings to title caps in a string array

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


