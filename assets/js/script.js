
var region = ["America", "Europe", "Africa", "Asia"]
$("button").on("click", function() {
    var region = $(this).attr("location-button");
    var queryURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation="+region+"&q=statue&medium=Sculpture&hasImages=true";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
         console.log(response);
    })
})