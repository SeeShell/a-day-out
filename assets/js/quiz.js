var region1 = localStorage.getItem("region1");
var region2 = localStorage.getItem("region2");

var objectID1 = localStorage.getItem("objectID1");
var objectID2 = localStorage.getItem("objectID2");

var objectIDArray = []
objectIDArray.push(objectID1);
objectIDArray.push(objectID2);

var randObjectID = objectIDArray[Math.floor(Math.random() * objectIDArray.length)];

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
        console.log(imageUrl)
        $("#flash-card").attr("src", imageUrl);


        // var artist = response.artistDisplayName;
        // var title = response.title;
  
        // var date = response.objectDate;
        // var medium = response.medium;
        // var country = response.country;
        // var dimensions = response.dimensions;
        // var metLink = response.objectURL;

    });
}