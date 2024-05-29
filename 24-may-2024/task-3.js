let url = "https://restcountries.com/v3.1/all"

let restCountries = new XMLHttpRequest();
restCountries.open("GET", url)
restCountries.send();   

restCountries.onreadystatechange=function(){
    if(this.status === 200 && this.readyState === 4){
        var output = JSON.parse(this.responseText)
        output.forEach(country=>{
            if(country.flags){
                console.log(`Name: ${country.name.common}, Region: ${country.region}, Sub-region: ${country.subregion}, Population: ${country.population}`)
            }
        })
    }
}