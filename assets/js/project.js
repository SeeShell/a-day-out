var region1 = localStorage.getItem("region1");
var region2 = localStorage.getItem("region2");

if (region1 === null || region2 === null) {
  window.location.href = "index.html";
}

$(function() {
  var queryURL1 =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=" +
    region1 +
    "&q=statue&medium=Sculpture&hasImages=true";
  var queryURL2 =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=" +
    region2 +
    "&q=statue&medium=Sculpture&hasImages=true";

  //ART SPOT #1
  $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response1) {
    console.log(response1);
    var objectIDArray1 = response1.objectIDs;
    var randObjectID1 =
      objectIDArray1[Math.floor(Math.random() * objectIDArray1.length)];
    console.log(randObjectID1);
    //out of random objects fitting criteria call function
    renderArt1(randObjectID1);
  });

  //ART SPOT #2
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response2) {
    console.log(response2);
    var objectIDArray2 = response2.objectIDs;
    var randObjectID2 =
      objectIDArray2[Math.floor(Math.random() * objectIDArray2.length)];
    console.log(randObjectID2);
    //out of random objects fitting criteria call function
    renderArt2(randObjectID2);
  });

  // get art from objectID ART #1
  function renderArt1(randObjectID1) {
    //UV place UFL
    var queryURL =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      randObjectID1;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var imageUrl = response.primaryImageSmall;
      var artist = response.artistDisplayName;
      var title = response.title;

      var date = response.objectDate;
      var medium = response.medium;
      var country = response.country;
      var dimensions = response.dimensions;
      // var metLink = respon
      if (artist === "") {
        artist.text;
        $("#artist1").text("Unknown");
      }
      if (title === "") {
        $("#title1").text("Unknown");
      }
      if (date === "") {
        $("#date1").text("Unknown");
      }
      if (medium === "") {
        $("#medium1").text("Unknown");
      }
      if (country === "") {
        $("#region1").text(region1);
      }
      if (dimensions === "") {
        $("#dimension1").text("Unknown");
      } else {
        $("#image1").attr("src", imageUrl);
        $("#artist1").append(artist);
        $("#title1").append(title);
        $("#region1").append(country);
        $("#date1").append(date);
        $("#dimensions1").append(dimensions);
      }
    });
  }

  // get art from objectID ART #2
  function renderArt2(randObjectID2) {
    //UV place UFL
    var queryURL =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      randObjectID2;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var imageUrl = response.primaryImageSmall;
      var artist = response.artistDisplayName;
      var title = response.title;

      var date = response.objectDate;
      var medium = response.medium;
      var country = response.country;
      var dimensions = response.dimensions;
      // var metLink = response.

      if (artist === "") {
        artist.text;
        $("#artist2").text("Unknown");
      }
      if (title === "") {
        $("#title2").text("Unknown");
      }
      if (date === "") {
        $("#date2").text("Unknown");
      }
      if (medium === "") {
        $("#medium2").text("Unknown");
      }
      if (country === "") {
        $("#region2").text(region2);
      }
      if (dimensions === "") {
        $("#dimension2").text("Unknown");
      } else {
        $("#image2").attr("src", imageUrl);
        $("#artist2").append(artist);
        $("#title2").append(title);
        $("#region2").append(country);
        $("#date2").append(date);
        $("#medium2").append(medium);
        $("#dimensions2").append(dimensions);
      }
    });
  }
});


//---------- Projects functions ------------------------------
renderProject();
// Questions and projects render and refresh
var projectObj = {0: {questions: ["first question", "second question"],
                      project: ["first directive", "second directive"]},
                  1: {questions: ["What's different about these two objects?", "What's similar?", "What do you think the objects were used for? (i.e. decoration, devotion, etc)", "In what context do you think the object was originally displayed?"],
                      project: ["Think about how one of the objects above was used. What is something in your life that you use in the same way?", "Using a medium of your choice: draw, sculpt, or paint an item in your life that fills that function."]},
                  2: {questions: ["first question here", "second question here", "third question here"],
                      project: ["first directive here", "second directive here", "third directive here"]}
                }
var questionDiv = $("#questions-div");
var projectDiv = $("#project-div");

// This function clears the question and project divs and replaces them 
// with a randomly fetched set from the above project object
function renderProject(){
    questionDiv.empty();
    projectDiv.empty();

    var projectObjIndex = Math.floor(Math.random() * 3);
    console.log(projectObjIndex);
    var currentSet = projectObj[projectObjIndex];
    console.log(currentSet)
    for (i in currentSet.questions){
        var newQ = $("<p>").text(projectObj[projectObjIndex].questions[i]);
        questionDiv.append(newQ);
    };
    for (i in currentSet.project){
        var newP = $("<p>").text(projectObj[projectObjIndex].project[i]);
        projectDiv.append(newP);
    };

}

// Event listener for a click on the project refresh button
$("#project-refresh").on("click", function(){
    renderProject();
})

// Return to homepage to select new regions
$("#home-refresh").on("click", function(){
    window.location.href = "index.html";
})


// -------------------------EDAMAM API---------------------------------

// $("a").on("click", function() {

//   var region1 = "asian"
//   var APIid = "1da6de4c";
//   var APIKey = "b4525aef1893921308c30d0194460591";
//   var queryURL = "https://api.edamam.com/search?q="+region1+"&app_id="+APIid+"&app_key="+APIKey;

// //recipe from the region you were in
// for (var i = 0; i <3;i++){
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     var recipeArray = response.hits;
//     var randRecipe = recipeArray[Math.floor(Math.random() * recipeArray.length)];
//     console.log(randRecipe)
//     // out of random objects fitting criteria call function
//     renderRecipe(randRecipe);
//     });

//   function renderRecipe(randRecipe){
//       //get recipes title, image, and link
//       var recipeTitle = $("<p>").text(randRecipe.recipe.label);
//       var recipeImage = $("<img>").attr('src',randRecipe.recipe.image);
//       var recipeHealth= $("</p>").text(randRecipe.recipe.healthLabels);
//       var recipeURL= $("<p>").text(randRecipe.recipe.url);
//       $(".recipe").append(recipeTitle);
//       $(".recipe").append(recipeImage);
//       $(".recipe").append(recipeURL);
//       $(".recipe").append(recipeHealth);

//     };
//   }

// });
