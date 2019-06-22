
import {readData,displayMovies, displayDetailMovie} from './main.js';
import data from '../data/movie.js';

const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const viewport = document.getElementById("viewport");


const moviearray = readData(data);
displayMovies(moviearray,detailTemplate);

$('#detailIcon').click(function() {
   const template = document.getElementById("detail_template").innerHTML;
   const apiUrl = 'http://www.omdbapi.com/?s=spider man&apikey=d088aa8d';
        fetch(apiUrl)
        .then(data =>{
            console.log(data); return data.json();
        })
        .then(result => {
            displayDetailMovie(result,template);
        })
});

