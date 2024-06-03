class Movie {
    constructor(title = '', studio = '', rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }
    getPG(movies = [Movie]){
        var instance = [];
        movies.forEach((movies)=>{
            if(movies.rating === "PG"){
                instance.push(movies)
            }
        })
        return instance
    }
}

const Batman = new Movie("Batman", "Warner Bros")
const Superman = new Movie("Superman", "Dreamworks")
const Spiderman = new Movie("Spiderman", "Paramount Pictures", "PG13")
const Ironman = new Movie("Ironman", "Lionsgate", "R")

console.log(Batman.getPG([Batman, Superman, Spiderman, Ironman]))