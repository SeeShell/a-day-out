var objectIDsArray = JSON.parse(localStorage.getItem("objectIDsArray"));

renderQuizImage(objectIDsArray);

function renderQuizImage(objectIDsArray) {
  $("#flash-card").empty();
  $("#flash-card-div").empty();
  var randObjectID =
    objectIDsArray[Math.floor(Math.random() * objectIDsArray.length)];
  var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    randObjectID;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var imageUrl = response.primaryImageSmall;
    var quizImage = $("<img>").attr("src", imageUrl);
    $("#flash-card").append(quizImage);

    var artist = response.artistDisplayName;
    var title = response.title;

    var date = response.objectDate;
    var medium = response.medium;
    var country = response.country;
    var dimensions = response.dimensions;

    var titleCard = $("<h2>").text(title);
    var artistCard = $("<p>").text("Artist: " + artist);
    var dateCard = $("<p>").text("Date: " + date);
    var mediumCard = $("<p>").text("Medium: " + medium);
    var countryCard = $("<p>").text("Country: " + country);
    var dimensionsCard = $("<p>").text("Dimensions: " + dimensions);

    if (title === "") {
      var titleCard = $("<h2>").text("Unknown");
    }
    if (artist === "") {
      var artistCard = $("<p>").text("Artist: Unknown");
    }
    if (date === "") {
      var dateCard = $("<p>").text("Date: Unknown");
    }
    if (medium === "") {
      var mediumCard = $("<p>").text("Medium: Unknown");
    }
    if (country === "") {
      var countryCard = $("<p>").text("Country: Unknown");
    }
    if (dimensions === "") {
      var dimensionsCard = $("<p>").text("Country: Unknown");
    }

    $("#flash-card-div").append(
      titleCard,
      artistCard,
      dateCard,
      mediumCard,
      countryCard,
      dimensionsCard
    );
  });
}

$("#next-card").on("click", function() {
  renderQuizImage(objectIDsArray);
});

$("#clear-deck").on("click", function(){
  objectIDsArray = [];
  localStorage.setItem("objectIDsArray",JSON.stringify(objectIDsArray));
})
