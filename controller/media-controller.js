// const db = require("../models");
const axios = require("axios");

const utellyCall = () => {
    axios({
        "method": "GET",
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
            "useQueryString": true
        }, "params": {
            "term": "bojack",
            "country": "uk"
        }
    })
        .then((response) => {
            //Name of show/movie
            let mediaName = response.results[0];
            //Name of streaming Service
            let mediaLocations = response.results[0].locations;
            //IMDB ID for Movie Database (IMDB Alternative)
            let id = response.results[0].external_ids.imdb.id;
            console.log(mediaName, mediaLocations, id);
            IDMBcall(id); 
        })
        .catch((error) => {
            console.log(error);
        });
    //IMDB calls
};
const IDMBcall = (id) => {
    axios({
        "method": "GET",
        "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
            "useQueryString": true
        }, "params": {
            "i": `${id}`,
            "r": "json"
        }
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

utellyCall(); 