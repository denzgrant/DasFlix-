$(document).ready(() => {

  function wait() {
    let glide = new Glide(".showcase", {
      type: "carousel",
      autoplay: 3500,
      perView: 6,
    });

    let glide2 = new Glide(".search", {
      type: "carousel",
      autoplay: 3500,
      perView: 6,
    });

    glide.mount();
    glide2.mount();
  }

  setTimeout(wait, 2000);

  //let $submitBtn = $("#submit");

    // var $exampleList = $("#example-list");

    // let exampleMovies = [{ title: "James Bond" }, { title: "James Bond" }, { title: "James Bond" }, { title: "James Bond" }, { title: "James Bond" }];

    // // The API object contains methods for each kind of request we'll make
    // var API = {
    //   saveExample: function (example) {
    //     return $.ajax({
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       type: "POST",
    //       url: "api/examples",
    //       data: JSON.stringify(example),
    //     });
    //   },
    //   getExamples: function () {
    //     return $.ajax({
    //       url: "api/examples",
    //       type: "GET",
    //     });
    //   },
    //   deleteExample: function (id) {
    //     return $.ajax({
    //       url: "api/examples/" + id,
    //       type: "DELETE",
    //     });
    //   },
    // };

    //$("#submit").on("click", function () {
    //   event.preventDefault();
    //   const searchedMedia = $("#submit-query").val().trim().toLowerCase();

    //   $.get(`/api/media-search/${searchedmedia}`, function (data) {
    //     console.log(data);
    //     if (data) {
    //       $(".flip-card-front").append(`
    //         <img src="${mediaPoster}" alt="poster of movie/tv">`);
    //       $(".flip-card-back").append(`
    //           <h1>${mediaTitle}</h1>
    //           <p>Type ${mediaType}\n
    //           Year Released: ${mediaYear}\n
    //           Plot: ${mediaPlot}</p>
    //           <strong>Available on ${mediaLocations}</strong>`);
    //     } else {
    //       //prompt an error message
    //     }
    //   });
    // });

    /////////////////////////////////////////////////////////////////////////////////////////
    //3 party API call
    /////////////////////////////////////////////////////////////////////////////////////////

  
  /////////////////////////////////////////////////////////////////////////////////////////
  //Produce 10 popular titles
  /////////////////////////////////////////////////////////////////////////////////////////
  let queryTrending = () => {
    let queryURL = `http://localhost:8080/api/trending/`;
    let data;
    let glideContainer = `      
    <div class="glide showcase">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides" id="movie-bottom-list">        
      </ul>
    </div>
  </div>
`;
        $("#search").append(glideContainer);

        $.ajax({
                url: queryURL,
                method: "GET",
            })
            // After the data comes back from the API
            .then((response) => {
                console.log(response);
                let tvArr = response.media;
                tvArr.forEach((movie) => {
                    let thisMovieCard = `
<li class="glide__slide">
<img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="${movie.title}">
  <div class="flip-card-back">
      <h2> ${movie.title} </h2>
      <p> ${movie.overview} </p>
      <button></button>
  </div>
</li>
`;
                    $("#movie-bottom-list").prepend(thisMovieCard);
                });
            });
    };
    queryTrending();

    ///////////////////////////////////////////////////////////////////////////////////////////
    // //Produce 10 titles based on a query
    ///////////////////////////////////////////////////////////////////////////////////////////
    // function queryThirdPartyAPI() {
    //   let queryURL = `http://localhost:8080/api/mediaSearch/anchorman`;

  //   let data;
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET",
  //   })
  //     // After the data comes back from the API
  //     .then((response) => {
  //       console.log(response);
  //       $("#theData").text(response.mediaPlot);
  //     });
  //   }
  //   data = queryThirdPartyAPI();
  ///////////////////////////////////////////////////////////////////////////////////////////
  ////Produce 10 titles tv show only
  ///////////////////////////////////////////////////////////////////////////////////////////
  let tenShows = () => {
    let queryURL = `http://localhost:8080/api/tenShows/`;
    let data;
    let glideContainer = `      
    <div class="glide search">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides" id="movie-top-list">        
      </ul>
    </div>
  </div>
`;
        $("#showcase").append(glideContainer);

        $.ajax({
                url: queryURL,
                method: "GET",
            })
            // After the data comes back from the API
            .then((response) => {
                console.log(response);
                let movieArray = response.media;
                movieArray.forEach((movie) => {
                    let thisMovieCard = `
<li class="glide__slide">
<img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="${movie.title}">
  <div class="flip-card-back">
      <h2> ${movie.title} </h2>
      <p> ${movie.overview} </p>
      <button></button>
  </div>
</li>
`;
                    $("#movie-top-list").prepend(thisMovieCard);
                });
                //$("#theData").text(response.mediaTitle);
            });
    };
    tenShows();

    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 titles based on a query
    /////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 titles tv show only
    /////////////////////////////////////////////////////////////////////////////////////////
    //   let tenShows = () => {
    //     let queryURL = `http://localhost:8080/api/tenShows/`;
    //     let glideContainer = `
    //     <div class="glide">
    //     <div class="glide__track" data-glide-el="track">
    //       <ul class="glide__slides" id="movie-top-list">
    //       </ul>
    //     </div>
    //   </div>
    // `;
    //     $("#showcase").append(glideContainer);
    //     let data;
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET".then((response) => {
    //         console.log(response);
    //         let movieArray = response.media;
    //         movieArray.forEach((movie) => {
    //           let thisMovieCard = `
    // <li class="glide__slide">
    // <img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="${movie.title}">
    //   <div class="flip-card-back">
    //       <h2> ${movie.title} </h2>
    //       <p> ${movie.overview} </p>
    //       <button></button>
    //   </div>
    // </li>
    // `;
    //           $("#movie-top-list").append(thisMovieCard);
    //         });
    //       }),
    //     });
    //   };
    //   tenShows();

    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 titles movies only
    /////////////////////////////////////////////////////////////////////////////////////////
    let tenMovies = () => {
        let queryURL = `http://localhost:8080/api/tenMovies/`;

        let data;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then((response) => {
            let movArr = response.media;
            console.log(movArr);
            for (let i = 0; i < movArr.length; i++) {
                const movies = movArr[i];
                let thisMovCard = `
  <li>
  <div class="flip-card">
  <div class="flip-card-inner">
  <div class="flip-card-front">
      <img src="http://image.tmdb.org/t/p/w185//${movies.poster_path}" alt="${movies.title}">
  </div>
  <div class="flip-card-back">
      <h2> ${movies.title} </h2>
      <p> ${movies.overview} </p>
      <button></button>
  </div>
  </div>
  </div>
  <div class="uk-position-center uk-panel">
  </div>
  </li>
  `;
                $("#bottom-movie-list").append(thisMovCard);
            }
        });
    };
    tenMovies();
    /***************************************************************************************/
    //-	Delete entire watchlist
    /***************************************************************************************/

    /***************************************************************************************/
    //-	Delete a movie/show of a watchlist with an id
    /***************************************************************************************/
    $(".media-delete").on("click", function(event) {
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax("/api/media/" + id, {
            type: "DELETE",
        }).then(function() {
            console.log("List was deleted");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    /***************************************************************************************/
    //-	Create a list
    /***************************************************************************************/
    const createList = (userId, listName) => {
        let newList = {
            "name": listName,
            "userId": userId
        };
        console.log("about to create list", newList);
        $.ajax("/api/lists", {
                method: "POST",
                data: newList
            })
            .then(
                function() {
                    console.log("Created list", newList);
                    location.reload();
                }
            ).error(function() {
                console.log("something failed", newList);
            });
    };
    //test code once elements created we will update this code 
    // $("#list-submit").on("click", function(event) {
    //     const listname = $("#list-name").val().trim();
    //     console.log("about to call function", listname);
    //     createList(1, listname);
    // });
    /***************************************************************************************/
    //-	Create a movie (to put inside of list)
    /***************************************************************************************/

    //$submitBtn.on("click", handleFormSubmit);
    //$exampleList.on("click", ".delete", handleDeleteBtnClick)
});