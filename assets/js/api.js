$(function() {
  // -------------------------THE MET API---------------------------------
  var firstRegionSelected = false;
  var region1 = "";
  var region2 = "";
  //onclick for REGIONS-------------
  $(".location-button").on("click", function(event) {
    event.preventDefault();
    // var firstRegionSelected = false;
    if (firstRegionSelected) {
      region2 = $(this)[0].id;
      renderRegions(region2);
      $(this).addClass("colorMarker");
    } else if (!firstRegionSelected) {
      region1 = $(this)[0].id;
      firstRegionSelected = true;
      renderRegions(region1);
      $(this).addClass("colorMarker");
    }

    console.log(region1);
    console.log(region2);
    localStorage.setItem("region1", region1);
    localStorage.setItem("region2", region2);
  });

  //onclick GET ART------------
  $("#go-button").on("click", function() {
    if (region1 !== "" && region2 !== "") {
      window.location.href = "project.html";
      localStorage.removeItem("objectID1");
      localStorage.removeItem("objectID2");
    }
  });
});

//onclick REFRESH REGIONS--------
$("#refresh-regions").on("click", function() {
  $("#first-region").empty();
  $("#second-region").empty();
  region1 = "";
  region2 = "";
  localStorage.setItem("region1", region1);
  localStorage.setItem("region2", region2);
  $(".location-button").removeClass("colorMarker");
});
