const express = require("express");
const router = express.Router();
const axios = require("axios");



router.get("/api/mediaSearch", async (req, res) => {
    try {
        const firstData = await axios.get(`"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
      "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
          "useQueryString": true
      }, "params": {
          "term": ${name},
          "country": "uk"
      }`);
        res.json({
            mediaTitle: firstData.results[0],
            mediaLocations: firstData.results[0].locations,
            id: firstData.results[0].external_ids.imdb.id,
        });
        const secondData = await axios.get(`"url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
        "useQueryString": true
    }, "params": {
        "i": ${id},
        "r": "json"
    }`);
        res.json({
            //type as in TV or Movie
            mediaType: secondData.Type,
            mediaPlot: secondData.Plot,
            mediaYear: secondData.Year,
            mediaPoster: secondData.Poster,
        });
    } catch (error) {
        res.status(500).send(error);
    }

});

