//-----------EUROPE-------------
// Here we are building the URL we need to query the database
var queryURL ="https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=Europe&q=statue&medium=Sculpture&hasImages=true";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var objectIDArray = response.objectIDs;
    var randObjectID = objectIDArray[Math.floor(Math.random() * objectIDArray.length)];
    console.log(randObjectID)
    //out of random objects fitting criteria
    renderArt1(randObjectID);
  });

// get art from objectID
function renderArt1 (randObjectID) {
    //UV place UFL
    var queryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+randObjectID
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
          .then(function (response) {
              console.log(response)

              var imageUrl=response.primaryImage
              var artist =response.artistDisplayName
              var title = response.title
             
              var date = response.objectDate
              var medium = response.medium
              var country = response.country
              var dimensions = response.dimensions
              // var metLink = response. 

              console.log(dimensions)

            if (artist=== ""){
              artist.text
              $("#artist1").text("Unknown")
            }
            if (title=== ""){
              $("#title1").text("Unknown")
            }
            if (date=== ""){
              $("#date1").text("Unknown")
            }
            if (medium=== ""){
              $("#medium1").text("Unknown")
            }
            if (country=== ""){
              $("#region1").text("Europe")
            }
            if (dimensions===""){
              $("#dimension1").text("Unknown")
            }

            else{
              $("#image1").attr('src', imageUrl);
              $("#artist1").append(artist)
              $("#title1").append(title)
              $("#region1").append(country)
              $("#date1").append(date)
              $("#medium1").append(medium)
              $("#dimensions1").append(dimensions)
            }
          });
    };


//--------------ASIA-------------
var queryURL ="https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=Asia&q=statue&medium=Sculpture&hasImages=true"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var objectIDArray = response.objectIDs
    var randObjectID = objectIDArray[Math.floor(Math.random() * objectIDArray.length)]
    console.log(randObjectID)
    //out of random objects fitting criteria
    renderArt2(randObjectID);
  });

// get art from objectID
function renderArt2 (randObjectID) {
    //UV place UFL
    var queryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+randObjectID
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
          .then(function (response) {
              console.log(response)

              var imageUrl=response.primaryImage
              var artist =response.artistDisplayName
              var title = response.title
             
              var date = response.objectDate
              var medium = response.medium
              var country = response.country
              var dimensions = response.dimensions
              // var metLink = response. 

              console.log(dimensions)

            if (artist=== ""){
              artist.text
              $("#artist2").text("Unknown")
            }
            if (title=== ""){
              $("#title2").text("Unknown")
            }
            if (date=== ""){
              $("#date2").text("Unknown")
            }
            if (medium=== ""){
              $("#medium2").text("Unknown")
            }
            if (country=== ""){
              $("#region2").text("Asia")
            }
            if (dimensions===""){
              $("#dimension2").text("Unknown")
            }

            else{
              $("#image2").attr('src', imageUrl);
              $("#artist2").append(artist)
              $("#title2").append(title)
              $("#region2").append(country)
              $("#date2").append(date)
              $("#medium2").append(medium)
              $("#dimensions2").append(dimensions)
            }
          });
    };