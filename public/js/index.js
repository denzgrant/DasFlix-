$(document).ready(() => {

var watchlists;

    function wait() {
        let glide = new Glide('.showcase', {
            type: 'carousel',
            autoplay: 3500,
            perView: 6
        });

        let glide2 = new Glide('.search', {
            type: 'carousel',
            autoplay: 3500,
            perView: 6
        });

        glide.mount();
        glide2.mount();
    }

    setTimeout(wait, 2000);

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });


    //On click add a movie to a chosen watchlist
    $("#search").on("click", "#watchlist-button", function () {
        console.log($(this).parent());
        $("#ex1").empty();
        const watchList = getWatchlists();

        $("#ex1").append('<li>My Favorite</li>')
        //run call for watchlists 
        //load them into modals
    })

    /////////////////////////////////////////////////////////////////////////////////////////
    //3 party API call
    /////////////////////////////////////////////////////////////////////////////////////////
    
    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 popular titles
    /////////////////////////////////////////////////////////////////////////////////////////
    let queryTrending = () => {
      let queryURL = `/api/trending/`;
      let data;
      let glideContainer = `    
          
    <div class="glide showcase">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides" id="movie-bottom-list">        
      </ul>
    </div>
  </div>
`;
$('#showcase').append(glideContainer);

        $("#poster").click(function () {
            alert("test");
          });

          $.ajax({
            url: queryURL,
            method: 'GET'
        })
            // After the data comes back from the API
            .then((response) => {
              let tvArr = response.media;
                tvArr.forEach((movie) => {
                  let thisMovieCard = `
                  
                  <li class="glide__slide">
<img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" id="poster" alt="${movie.title}">
<a href="#ex1" rel="modal:open" id="watchlist-button" class="btn btn-primary">Add to Watchlist</a>
<div class="flip-card-back">
      <h2> ${movie.title} </h2>
      <p> ${movie.overview} </p>
      </div>
      </li>
`;
$('#movie-bottom-list').prepend(thisMovieCard);
});
            });
          };
    queryTrending();
    
    ///////////////////////////////////////////////////////////////////////////////////////////
    // //Produce 10 titles based on a query
    ///////////////////////////////////////////////////////////////////////////////////////////

    function queryThirdPartyAPI(searchTerm) {
        let queryURL = `/api/mediaSearch/${searchTerm}`;
        let glideContainer = `      
        <div class="glide search">
    <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides" id="movie-search-list">        
    </ul>
    </div>
    </div>
    `;
        $('#search').empty();
        $('#search').append(glideContainer);
        
        $.ajax({
            url: queryURL,
            method: 'GET'
          })
            // After the data comes back from the API
            .then((response) => {
                console.log(response);
                let thisMovieCard = `
                <li class="glide__slide">
                <img width="185" src="http://image.tmdb.org/t/p/w185//${response.mediaPoster}" alt="${response.mediaTitle}">
      <a href="#ex1" rel="modal:open" id="watchlist-button" class="btn btn-primary">Add to Watchlist</a>
      <div class="flip-card-back">
      <h2> ${response.name} </h2>
      <p> ${response.mediaPlot} </p>
      </div>
      </li>
      `;
                console.log(thisMovieCard);
                $('#movie-search-list').append(thisMovieCard);
              });
    }
    
    
    $('#submit').on('click', () => {
      let searchTerm = $('#submit-query').val();
      queryThirdPartyAPI(searchTerm);
    });
    ///////////////////////////////////////////////////////////////////////////////////////////
    ////Produce 10 titles tv show only
    ///////////////////////////////////////////////////////////////////////////////////////////
    let tenShows = () => {
      let queryURL = `/api/tenShows/`;
        let data;
        let glideContainer = `      
        <div class="glide search">
    <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides" id="movie-top-list">        
    </ul>
    </div>
    </div>
    `;
        $('#search').append(glideContainer);
        
        $.ajax({
          url: queryURL,
          method: 'GET'
        })
        // After the data comes back from the API
            .then((response) => {
              let movieArray = response.media;
              movieArray.forEach((movie) => {
                let thisMovieCard = `
                <li class="glide__slide">
                <img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="${movie.title}">
<a href="#ex1" rel="modal:open" id="watchlist-button" class="btn btn-primary">Add to Watchlist</a>
<div class="flip-card-back">
<h2> ${movie.title} </h2>
<p> ${movie.overview} </p>
  </div>
</li>
`;
                    $('#movie-top-list').prepend(thisMovieCard);
                });
                //$("#theData").text(response.mediaTitle);
            });
    };
    $('#tv-shows-button').on('click', () => {
      tenShows();
    });
    tenShows();

    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 titles based on a query
    /////////////////////////////////////////////////////////////////////////////////////////
    
    /////////////////////////////////////////////////////////////////////////////////////////
    //Produce 10 titles movies only
    /////////////////////////////////////////////////////////////////////////////////////////
    
    let getWatchlists = () => {
      let queryURL = `/api/users/1/watchlists`
      $.ajax({
        url: queryURL,
            method: 'GET'
          })
          .then((response) => {
            console.log(response)
          })
    }
    
    let tenMovies = () => {
        let queryURL = `/api/tenMovies/`;
        let data;
        let glideContainer = `      
        <div class="glide search">
        <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides" id="movie-top-list">        
      </ul>
      </div>
      </div>
`;
$('#search').empty();
        $('#search').append(glideContainer);
        
        $.ajax({
          url: queryURL,
            method: 'GET'
          })
          // After the data comes back from the API
            .then((response) => {
              let movieArray = response.media;
                movieArray.forEach((movie) => {
                  let thisMovieCard = `
                  <li class="glide__slide">
<img src="http://image.tmdb.org/t/p/w185//${movie.poster_path}" alt="${movie.title}">
<a href="#ex1" rel="modal:open" id="watchlist-button" class="btn btn-primary">Add to Watchlist</a>
<div class="flip-card-back">
      <h2> ${movie.title} </h2>
      <p> ${movie.overview} </p>
      </div>
      </li>
`;
                    $('#movie-top-list').prepend(thisMovieCard);
                });
              });
    };
    
    $('#movies-button').on('click', () => {
      tenMovies();
    });
    
    /***************************************************************************************/
    //-	Delete entire watchlist
    /***************************************************************************************/
    
    /***************************************************************************************/
    //-	Delete a movie/show of a watchlist with an id
    /***************************************************************************************/
    $('.media-delete').on('click', function (event) {
        var id = $(this).data('id');
        // Send the DELETE request.
        $.ajax('/api/media/' + id, {
          type: 'DELETE'
        }).then(function () {
          console.log('List was deleted');
            // Reload the page to get the updated list
            location.reload();
          });
        });
        
    
        /***************************************************************************************/
    //-	Create a movie (to put inside of list)
    /***************************************************************************************/
    const createMovie = (movie) => {
      console.log('about to create media', movie);
        $.ajax('/api/media', {
            method: 'POST',
            data: movie
          })
            .then(function () {
              console.log('created movie', movie);
                location.reload();
              })
            .error(function () {
              console.log('there was an error creating movie', movie);
            });
    };
    // createMovie({
    //     "title": "shrek",
    //     "media_type": "movie",
    //     "external_id": "45646fsdsag",
    //     "summary": "story about SCottish Independence Wars",
    //     "icon": "link to icon",
    //     "listId": 1,
    //     "provider": "hulu"
    // });
    //$submitBtn.on("click", handleFormSubmit);
    //$exampleList.on("click", ".delete", handleDeleteBtnClick)


    ///////////////////////// getListsByUserId(userid,cb) ////////// *******Working 
    const getListsByUserId = async (userId, cb) => {
      console.log('about to get lists for user', userId);
        $.ajax(`/api/users/${userId}/lists`, {
          method: 'GET',
        })
            .then(function (lists) {

              console.log('lists', lists);
              cb(lists);
              })
            .catch(function () {
                console.log('there was an error ');
              });
              console.log(watchlists)
              return watchlists;
              
    };
    
    ///////////////////////// getMoviesByList(listId,cb) ////////// *******Working 
    const getMoviesByList = (listId, cb) => {
      console.log('about to get movies in list', listId);
      $.ajax(`api/lists/${listId}/media`, {
        method: 'GET',
      })
        .then(function (media) {
          console.log('media', media);
          cb(media);
            })
            .catch(function () {
                console.log('there was an error ');
            });
    };

    ///////////////////////// createList(userId,listName) ////////// *******Working  
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
                function () {
                    console.log("Created list", newList);
                    
                  }
            ).catch(function () {
              console.log("something failed", newList);
            });
    };
    //test code once elements created we will update this code
    // $("#list-submit").on("click", function(event) {
    //     const listname = $("#list-name").val().trim();
    //     console.log("about to call function", listname);
    //     createList(1, listname);
    // });

    ///////////////////////// deleteList(listId) ////////// *******Working  
    const deleteList = (listId) => {
        console.log("about to delete list", listId);
        $.ajax(`/api/lists/${listId}`, {
            method: "DELETE"
          })
            .then(
              function () {
                    console.log("deleted list", listId);
                   
                  }
            ).catch(function () {
              console.log("something failed", listId);
            });
          };
          
          ///////////////////////// showMostWatchlistedTitles(cb) ////////// *******Working  
          const showMostWatchlistedTitles = (cb) => {
        console.log("about to get most watched list");
        
        $.ajax(`/api/media/mostwatched`, {
            method: "GET"
          })
          .then(
                function (data) {
                  console.log("most watched", data);
                  cb(data);
                }
                ).catch(function () {
                console.log("something failed");
              });
            };
            
    // // HOW TO USE:
    // $("#testbtn").on("click", function() {
      
           const my_happy_callback = (result) => {
            console.log("calling from within my test",result);
             const the_movies = result.media;
             for (let list of the_movies) {
                 console.log(list);
             };
         };
    
    //     getMoviesByList(1, my_happy_callback);
    // });

    let cb = (data) => {
      console.log("calling from within my test", data);
       return data;
   };
  
    // Create list on button click

    $("#watchlist-view").on("click", function(){
      let currentUser = $("#watchlist-view").data("user");
      let listName = prompt('enter list name')
      createList(currentUser, listName);
      buildLists();
      location.reload();
      
    });





   //Dynamically add lists on page load 
    if(window.location.href === 'http://localhost:8080/watchlists'){
    function buildLists(){
      let currentUser = $("#watchlist-view").data("user");
      console.log(currentUser);
      const getResult = (data) => {
         console.log(data);
         $("#watchlists").empty();    
         data.forEach((listObj) => {
          console.log(listObj);
          let listLi = `
          <li class="watchlist-box d-flex flex-column justify-content-around align-items-center">
                    <div data-listid="${listObj.id}">
                        <h2>${listObj.name}</h2>
                    </div>
                    <div class="d-flex">
                        <a href="#view" id="watchlist-view" class="btn btn-primary">View Watchlist</a>
                        <a href="#remove" id="watchlist-view" class="btn btn-primary">Remove Watchlist</a>
                    </div>
                </li>
          `
          $("#watchlists").append(listLi);
         });
      };
      getListsByUserId(currentUser, getResult);
     }
     buildLists();
    }

  });
  