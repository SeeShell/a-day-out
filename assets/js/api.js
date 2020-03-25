
// Here we are building the URL we need to query the database
var queryURL ="https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=France&q=sculpture&q=hasImages=true"
// "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation="+userPickCountry+"&q=medium="+parameter;



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var objectIDArray = response.objectIDs
    var randObjectID = objectIDArray[Math.floor(Math.random() * objectIDArray.length)]
    // var randObjectID = items[Math.floor(Math.random() * response.objectIDs.length)]
    console.log(randObjectID)
    //out of random objects fitting criteria
    // var randObjectID= response.objectIDs[6]
    renderArt(randObjectID);
  });

// get art from objectID
function renderArt(randObjectID) {
    //UV place UFL
    var queryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+randObjectID
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
          .then(function (response) {
              console.log(response)
              var imageUrl=response.primaryImage
              var artistsName =response.artistDisplayName
              var year = response.objectDate
              var medium = response.medium
              var country = response.country
              $("#image1").attr('src', imageUrl);
              $("#name").append(artistsName)
              $("#name").append(country)
              $("#name").append(year)
              $("#name").append(medium)
            // $("image1").append(image);
          });
    };