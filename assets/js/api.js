
// -------------------------THE MET API---------------------------------
// var region1 = ["america", "europe", "africa", "asia"]
// var region2 = ["america", "europe", "africa", "asia"]
// $("a").on("click", function() {
//      var region1 = $(this)[0].id
      var region1 = "Asia"
      var region2 = "Europe"
      var queryURL1 = "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation="+region1+"&q=statue&medium=Sculpture&hasImages=true";
      var queryURL2 = "https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation="+region2+"&q=statue&medium=Sculpture&hasImages=true";
      
      console.log(region1)
      console.log(region2)

    $.ajax({
        url: queryURL1,
        method: "GET"
      }).then(function(response1) {
        console.log(response1);
        var objectIDArray1 = response1.objectIDs;
        var randObjectID1 = objectIDArray1[Math.floor(Math.random() * objectIDArray1.length)];
        console.log(randObjectID1)
        //out of random objects fitting criteria
        renderArt1(randObjectID1);
      });

      $.ajax({
        url: queryURL2,
        method: "GET"
      }).then(function(response2) {
        console.log(response2);
        var objectIDArray2 = response2.objectIDs
        var randObjectID2 = objectIDArray2[Math.floor(Math.random() * objectIDArray2.length)]
        console.log(randObjectID2)
        //out of random objects fitting criteria
        renderArt2(randObjectID2);
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

                  var imageUrl=response.primaryImageSmall
                  var artist =response.artistDisplayName
                  var title = response.title
                
                  var date = response.objectDate
                  var medium = response.medium
                  var country = response.country
                  var dimensions = response.dimensions
                  // var metLink = response. 

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
                  $("#region1").text("Unknown")
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

                      var imageUrl=response.primaryImageSmall
                      var artist =response.artistDisplayName
                      var title = response.title
                    
                      var date = response.objectDate
                      var medium = response.medium
                      var country = response.country
                      var dimensions = response.dimensions
                      // var metLink = response. 

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
                      $("#region2").text("Unknown")
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
  // });

  // -------------------------EDAMAM API---------------------------------