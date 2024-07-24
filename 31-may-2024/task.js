// a. Get all the countries from Asia continent /region using Filter method

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((result)=>{
    const continent = result.filter((country)=>country.region === 'Asia')
    console.log(continent)
})
.catch((error)=>console.log("Error", error))


// b. Get all the countries with a population of less than 2 lakhs using Filter method

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((result)=>{
    const countryPopulation = result.filter((data)=>data.population < 200000)
    console.log(countryPopulation)
})
.catch((error)=>console.log("Error", error))

// c. Print the following details name, capital, flag, using forEach method

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((result)=>{result.forEach((data)=>{
        console.log("Name:", data.name.common, ",", "Capital:", data.capital, ",", "Flag:", data.flag)
    })
})
.catch((error)=>console.log("Error", error))

// d. Print the total population of countries using reduce method

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(result => {
    const totalPopulation = result.reduce((prev, curr) => prev + curr.population, 0);
    console.log('Total population of countries:', totalPopulation);
  })
  .catch((error)=>console.log("Error", error))

  // e. Print the country that uses US dollars as currency


  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryUsingUSD = data.find(country => {
      return country.currencies && country.currencies.USD;
    });
    if (countryUsingUSD) {
      console.log('Country that uses US dollars:', countryUsingUSD.name.common);
    } else {
      console.log('No country found that uses US dollars.');
    }
  })
  .catch(error => console.log('Error', error));


