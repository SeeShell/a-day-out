
var region1 = ["america", "europe", "africa", "asia"]
var region2 = ["america", "europe", "africa", "asia"]
$("button").on("click", function() {
    var region1 = $(this).attr("location-button");
    var queryURL = "" +
      region1 + "";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
         console.log(response);
    })
})
$("button").on("click", function() {
  var region2 = $(this).attr("location-button");
  var queryURL = "" +
    region2 + "";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
       console.log(response);
  })
})