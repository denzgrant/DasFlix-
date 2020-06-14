const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/api/mediaSearch/:searchTerm", async (req, res) => {
  try {
    const firstData = await axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup", {
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
        useQueryString: true,
      },
      params: {
        term: req.params.searchTerm,
        country: "us",
      },
    });
    const secondData = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=68c0e41b28df67801658d2f261ee4403&language=en-US&query=${req.params.searchTerm}&page=1&include_adult=false`, {

    });
    res.json({
      mediaTitle: firstData.data.results[0], //Title of show/movie
      mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: secondData.data.results[0].media_type,
      mediaPlot: secondData.data.results[0].overview,
      movieYear: secondData.data.results[0].release_date,
      seriesYear: secondData.data.results[0].first_air_date,
      mediaPoster: secondData.data.results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/api/trending/", async (req, res) => {
  try {
    const secondData = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=68c0e41b28df67801658d2f261ee4403", {

    });
    //Utelly can search only one term at a time 
    
    // const firstData = await axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup", {
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
    //     useQueryString: true,
    //   },
    //   params: {
    //     term: req.params.searchTerm,
    //     country: "us",
    //   },
    // });
    res.json({
      media:secondData.data.results,
      mediaTitle: secondData.data.results[0].title, //Title of show/movie
      // mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: secondData.data.results[0].media_type,
      mediaPlot: secondData.data.results[0].overview,
      movieYear: secondData.data.results[0].release_date,
      seriesYear: secondData.data.results[0].first_air_date,
      mediaPoster: secondData.data.results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/api/tenShows/", async (req, res) => {
  try {
    const secondData = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=68c0e41b28df67801658d2f261ee4403", {

    });
    //Utelly can search only one term at a time 

    // const firstData = await axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup", {
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
    //     useQueryString: true,
    //   },
    //   params: {
    //     term: req.params.searchTerm,
    //     country: "us",
    //   },
    // });
    res.json({
      media:secondData.data.results,
      mediaTitle: secondData.data.results[0].title, //Title of show/movie
      // mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: secondData.data.results[0].media_type,
      mediaPlot: secondData.data.results[0].overview,
      movieYear: secondData.data.results[0].release_date,
      seriesYear: secondData.data.results[0].first_air_date,
      mediaPoster: secondData.data.results[0].poster_path,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
