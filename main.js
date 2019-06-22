import Movie from "./Movie.js";

function readData(data, moviearray = []) {    
    for (let movie of data) {
        const movieObj = new Movie(movie.title, movie.poster, movie.casts, movie.link);
        moviearray.push(movieObj);
    }

    return moviearray;
}

function displayMovies(moviearray, template) {  
    for (let movie of moviearray) {        
        viewport.innerHTML += movie.render(template);        
    }
    
}

function displayDetailMovie(data,template){
    data.Search.forEach (item =>{
            viewport.innerHTML += item.render(template);
        })
  }


export {readData,displayMovies,displayDetailMovie};