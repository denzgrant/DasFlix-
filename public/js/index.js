// const { response } = require("express");

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
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

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id,
//         })
//         .append($a);

//       var $button = $("<button>").addClass("btn btn-danger float-right delete").text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim(),
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this).parent().attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
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

$(document).ready(() => {
let queryURL = `http://localhost:8080/api/mediaSearch/anchorman`;

let data;

function queryThirdPartyAPI() {
 $.ajax({
    url: queryURL,
    method: "GET",
  })
    // After the data comes back from the API
    .then((response) => {
      console.log(response);
      $("#theData").text(response.mediaPlot);
    });
}

data = queryThirdPartyAPI();;

});


//$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick)
