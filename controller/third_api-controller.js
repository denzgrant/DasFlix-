const express = require("express");
const router = express.Router();
const axios = require("axios");

//Network request communicates backend with frontend. Send Back JSON or Handlebars page. Jquery request in Handlebars page
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
    const secondData = await axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/", {
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "ff26cadbd3msh6f81da38fd7ebd2p184197jsne85e8fe7ff15",
        useQueryString: true,
      },
      params: {
        i: `${firstData.data.results[0].external_ids.imdb.id}`,
        r: "json",
      },
    });
    res.json({
      mediaTitle: firstData.data.results[0], //Title of show/movie
      mediaLocations: firstData.data.results[0].locations, //where to find show/movie
      //type as in TV or Movie
      mediaType: secondData.data.Type,
      mediaPlot: secondData.data.Plot,
      mediaYear: secondData.data.Year,
      mediaPoster: secondData.data.Poster,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
