var region1 = localStorage.getItem("region1");
var region2 = localStorage.getItem("region2");

if (region1 === null || region2 === null) {
  window.location.href = "index.html";
}


$(function() {
  var queryURL1 =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=" +
    region1 +
    "&q=statue&medium=Sculpture";
  var queryURL2 =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=" +
    region2 +
    "&q=statue&medium=Sculpture";
  
    var objectIDsArray = []

  //ART SPOT #1
  $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response1) {
    var objectID1 = localStorage.getItem("objectID1");

    if (objectID1===null) {
    var objectIDArray1 = response1.objectIDs;
    var randObjectID1 =
      objectIDArray1[Math.floor(Math.random() * objectIDArray1.length)];
      localStorage.setItem("objectID1",randObjectID1);
    }
    //out of random objects fitting criteria call function
    renderArt1(randObjectID1, objectID1);
  });
  
  //ART SPOT #2
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response2) {
    var objectID2 = localStorage.getItem("objectID2");
    
    if (objectID2===null) {
    var objectIDArray2 = response2.objectIDs;
    var randObjectID2 =
      objectIDArray2[Math.floor(Math.random() * objectIDArray2.length)];
      localStorage.setItem("objectID2",randObjectID2);
    }
    //out of random objects fitting criteria call function
    renderArt2(randObjectID2, objectID2);
  });

  
  // get art from objectID ART #1
  function renderArt1(randObjectID1, objectID1) {
  if (randObjectID1 == null){
    var queryURL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
    objectID1;
  }else{
    var queryURL =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      randObjectID1;
    }

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var imageUrl = response.primaryImageSmall;
      var artist = response.artistDisplayName;
      var title = response.title;

      var date = response.objectDate;
      var medium = response.medium;
      var country = response.country;
      var dimensions = response.dimensions;
      var metLink = response.objectURL;
  
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
        $("#image1-zoom").attr("src", imageUrl);
        $("#artist1").append(artist);
        $("#title1").append(title);
        $("#region1").append(country);
        $("#medium1").append(medium);
        $("#date1").append(date);
        $("#dimensions1").append(dimensions);
        $("#object1-met-page").attr("href",metLink);
        $("#userChoice1").append(region1);
        //put in array
        objectIDsArray.push(response.objectID);
        localStorage.setItem("objectIDsArray",JSON.stringify(objectIDsArray)); 
      }
    });
  }

  // get art from objectID ART #2
  function renderArt2(randObjectID2, objectID2) {
    if (randObjectID2 == null){
      var queryURL =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      objectID2;
    }else{
      var queryURL =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        randObjectID2;
      }

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var imageUrl = response.primaryImageSmall;
      var artist = response.artistDisplayName;
      var title = response.title;

      var date = response.objectDate;
      var medium = response.medium;
      var country = response.country;
      var dimensions = response.dimensions;
      var metLink = response.objectURL

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
        $("#image2-zoom").attr("src", imageUrl);
        $("#artist2").append(artist);
        $("#title2").append(title);
        $("#region2").append(country);
        $("#date2").append(date);
        $("#medium2").append(medium);
        $("#dimensions2").append(dimensions);
        $("#object2-met-page").attr("href",metLink);
        $("#userChoice2").append(region2);
        //put in array
        objectIDsArray.push(response.objectID);
        localStorage.setItem("objectIDsArray",JSON.stringify(objectIDsArray)); 
      }
    });
  }
});
 

//---------- Projects functions ------------------------------
// Questions and projects render and refresh
var projectObj = {
  0: {
    questions: [
      "Look at the dimensions for each object. Imagine how big the object would appear to you if you were viewing it in person. ", 
      "How does the size of an object change the way you experience it?",
      "Do you think the objects above are made for a public or private settings?",
      "Does the size distance you? Or draw you in?"],
    project: [
      "Choose one of the objects above or find an object in your life that is similar and recreate it somehow in its opposite scale. ",
      "For example, take a small object - like a coin - and find a way to make it huge! ",
      "Use a medium of your choice.",
      "Does the significance of the object change when you change its scale?"]
  },
  1: {
    questions: [
      "What's different about these two objects?",
      "What's similar?",
      "What do you think the objects were used for? (i.e. decoration, devotion, etc)",
      "In what context do you think the object was originally displayed?"
    ],
    project: [
      "Think about how one of the objects above was used. What is something in your life that you use in the same way?",
      "Using a medium of your choice: draw, sculpt, or paint an item in your life that fills that function."
    ]
  },
  2: {
    questions: [
      "Look at the medium for the objects above.",
      "Could the object be made in another medium and still convey the same message?",
      "Does the medium of the object influence the conceptual understanding, meaning, or value of the object?"
    ],
    project: [
      "Make a drawing or some other 2-D rendering of one of the subjects in the objects above.",
      "Can a drawing of this subject make the same impact as a sculpture?",
      "Think about the limitations of drawing an object from an image versus drawing it in person."
    ]
  },
  3: {
    questions:[
      "Think about the setting that these objects would have originally been displayed.",
      "Was it outdoors? Was it indoors with electric lighting? Was it candlelit? Was it dark or bright?",
      "How do you think the objects would look in different lighting?"
    ],
    project:[
      "Find an object made from similar materials as one of the objects above and bring it into different environments to see how it looks in different light.",
      "Make a sculpture from a medium that you think would respond to or look differently in different lights and repeat the exercise above.",
      "Take pictures of your sculpture in these different environments and compare how it translates in images."
    ]
  },
  4: {
    questions:[
      "For each object ask these questions:",
      "Why was the object made?",
      "Who was it made for?",
      "Why was it made from this particular material?",
      "Where would it have been displayed?"
    ],
    project:[
      "Choose a question above - ex: 'why this object was made' - and pick an object in your life that fills that role.",
      "Make that object out of a material you know will last for only a short time.",
      "For example, make a paper sculpture that you place outside knowing that the first rain will destroy it. Watch it be destroyed. This is hard! But it is good!",
      "Think about why material choice is important for the meaning and lifetime of your art project."
    ]
  }
};
var questionDiv = $("#questions-div");
var projectDiv = $("#project-div");

renderProject(projectObj);
// This function clears the question and project divs and replaces them
// with a randomly fetched set from the above project object
function renderProject(projectObj) {
  var questionDiv = $("#questions-div");
  var projectDiv = $("#project-div");
  projectDiv.empty();
  questionDiv.empty();

  var projectObjIndex = Math.floor(Math.random() * 3);
  
  var currentSet = projectObj[projectObjIndex];

  for (i in currentSet.questions) {
    var newQ = $("<p>").text(projectObj[projectObjIndex].questions[i]);
    questionDiv.append(newQ);
  }
  for (i in currentSet.project) {
    var newP = $("<p>").text(projectObj[projectObjIndex].project[i]);
    projectDiv.append(newP);
  }
}

// Event listener for a click on the project refresh button
$("#project-refresh").on("click", function() {
  renderProject(projectObj);
});

// Return to homepage to select new regions
$("#home-refresh").on("click", function() {
  window.location.href = "index.html";
});

var region1 = localStorage.getItem("region1");
var region2 = localStorage.getItem("region2");

// -------------------------EDAMAM API---------------------------------

$("button").on("click", function() {
  var buttonID = $(this).attr("id");
  if (buttonID === "region1-recipe"){
    var region = localStorage.getItem("region1");
    var recipeDiv = $("#region1-recipe-div")
    recipeDiv.empty();
    getRandRecipe(region, recipeDiv);
  }else if (buttonID === "region2-recipe"){
    var region = localStorage.getItem("region2");
    var recipeDiv = $("#region2-recipe-div")
    recipeDiv.empty();
    getRandRecipe(region, recipeDiv);
  }
});

// //recipe from the region you were in
function getRandRecipe(region, recipeDiv){
  var APIid = "1da6de4c";
  var APIKey = "b4525aef1893921308c30d0194460591";
  if (region==="North and Central America")
  {var queryURL = "https://api.edamam.com/search?q=American&app_id="+APIid+"&app_key="+APIKey;
  }
  else if(region==="South America")
  {var queryURL = "https://api.edamam.com/search?q=Brazilian&app_id="+APIid+"&app_key="+APIKey;
  }
  else if(region==="Europe")
  {var queryURL = "https://api.edamam.com/search?q=European&app_id="+APIid+"&app_key="+APIKey;
  }
  else if(region==="Asia")
  {var queryURL = "https://api.edamam.com/search?q=Asian&app_id="+APIid+"&app_key="+APIKey;
  }
  else if(region==="India")
  {var queryURL = "https://api.edamam.com/search?q=Indian&app_id="+APIid+"&app_key="+APIKey;
  }
  else if(region==="Africa")
  {var queryURL = "https://api.edamam.com/search?q=African&app_id="+APIid+"&app_key="+APIKey;
  }
  else{
  var queryURL = "https://api.edamam.com/search?q="+region+"&app_id="+APIid+"&app_key="+APIKey;
  }
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { 
      var recipeArray = response.hits;
      var randRecipe = recipeArray[Math.floor(Math.random() * recipeArray.length)];
      // out of random objects fitting criteria call function
      renderRecipe(randRecipe, recipeDiv);
      });
};

function renderRecipe(randRecipe, recipeDiv){
  
    //get recipes title, image, and link
    var recipeTitle = $("<p>").text(randRecipe.recipe.label);
    var recipeImage = $("<img>").attr('src',randRecipe.recipe.image);
    var recipeURL = $("<a>").attr("href", randRecipe.recipe.url).text("See Full Recipe");
    
    $(recipeDiv).append(recipeTitle);
    $(recipeDiv).append(recipeImage);
    $(recipeDiv).append(recipeURL);

  };