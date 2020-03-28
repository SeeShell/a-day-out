var objectIDsArray = JSON.parse(localStorage.getItem("objectIDsArray"));

var randObjectID = objectIDsArray[Math.floor(Math.random() * objectIDsArray.length)];

renderQuizImage(randObjectID);

function renderQuizImage (randObjectID) {
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
        var dimensionsCard =$("<p>").text("Dimensions: " + dimensions);

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
          var dimensionsCard =$("<p>").text("Country: Unknown");
        } 

        $(".uk-text-right").append(titleCard, artistCard, dateCard, mediumCard, countryCard, dimensionsCard); 

    });
}