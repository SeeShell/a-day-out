var objectIDsArray = localStorage.getItem("objectIDsArray");
console.log(objectIDsArray)
var randObjectID = objectIDsArray[Math.floor(Math.random() * objectIDsArray.length)];
console.log(randObjectID)
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


        // var artist = response.artistDisplayName;
        // var title = response.title;
  
        // var date = response.objectDate;
        // var medium = response.medium;
        // var country = response.country;
        // var dimensions = response.dimensions;
        // var metLink = response.objectURL;

    });
}