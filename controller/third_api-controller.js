const express = require("express");
const router = express.Router();
const axios = require("axios");
const APIKEY = process.env.APIKEY;

router.get("/api/mediaSearch/:searchTerm", async (req, res) => {
  try {
    let secondData = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${req.params.searchTerm}&page=1&include_adult=false`, {

    });

    const movies = secondData.data.results;
    console.log(movies);
    let results = [];

    for (let movie of movies) {
      if (movie.poster_path) {
        const m = {
          //type as in TV or Movie
          mediaTitle: movie.title || movie.name,
          mediaType: movie.media_type,
          mediaPlot: movie.overview,
          movieYear: movie.release_date || movie.first_air_date,
          mediaPoster: movie.poster_path,
        };
        results.push(m);
      }
    }
    res.json(results.slice(0, 10));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/trending/", async (req, res) => {
  try {
    const secondData = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`, {

    });
    let results = secondData.data.results.filter(movie => (movie.poster_path && !movie.poster_path.endsWith("null")));

    res.json({
      media: results,
      mediaTitle: results[0].title, //Title of show/movie
      // mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: results[0].media_type,
      mediaPlot: results[0].overview,
      movieYear: results[0].release_date,
      seriesYear: results[0].first_air_date,
      mediaPoster: results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/tenShows/", async (req, res) => {
  try {
    let secondData = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${APIKEY}`, {
    });
    let results = secondData.data.results.filter(movie => (movie.poster_path && !movie.poster_path.endsWith("null")));

    res.json({
      media: results,
      mediaTitle: results[0].title, //Title of show/movie
      // mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: results[0].media_type,
      mediaPlot: results[0].overview,
      movieYear: results[0].release_date,
      seriesYear: results[0].first_air_date,
      mediaPoster: results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/tenMovies/", async (req, res) => {
  try {
    let secondData = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`, {
    });
    let results = secondData.data.results.filter(movie => (movie.poster_path && !movie.poster_path.endsWith("null")));

    res.json({
      media: results,
      mediaTitle: results[0].title, //Title of show/movie
      // mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: results[0].media_type,
      mediaPlot: results[0].overview,
      movieYear: results[0].release_date,
      seriesYear: results[0].first_air_date,
      mediaPoster: results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
