
var region = ["america", "europe", "africa", "asia"]
$("button").on("click", function() {
    var region = $(this).attr("location-button");
    var queryURL = "" +
      region + "";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
         console.log(response);
    })
})