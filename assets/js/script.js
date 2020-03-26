// Adds user choice region to text area
function renderRegions(regionName){
    if ($("#first-region").text() === ""){
        $("#first-region").text(regionName);
    }else{
        $("#second-region").text(regionName);
    }
}
