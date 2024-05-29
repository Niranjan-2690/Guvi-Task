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