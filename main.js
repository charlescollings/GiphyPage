$(document).ready(function() {
// Variables
var drummers = ["John Bonham", "Ringo Star", "Keith Moon", "Dave Grohl", "Gene Krupa", "Lars Ulrich", "Buddy Rich", "Neil Peart", "Stewert Copeland"];

function pageLoad() {
    $("#buttons").empty();
    for (var i=0; i < drummers.length; i++) {
        var a = $("<button>");
        // Adding a class
        a.addClass("drummer");
        // Adding a data-attribute with a value of the drummer at index i
        a.attr("data-name", drummers[i]);
        // Providing the button's text with a value of the drummer at index i
        a.text(drummers[i]);
        // Adding the button to the HTML
        $("#buttons").append(a);
    };
};

function chooseDrummer()    {
    let drummerChosen = $(this).attr("data-name");
    console.log(this);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + drummerChosen + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
        }).then(function(response) {
            var result = response.data;
            // Retrieving the URL for the image
                for (let j=0; j < result.length; j++)    {
                    var gifDiv = $("<div class='item'>");
                    var rating = result[j].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var drummerImage = $("<img>");
                    drummerImage.addClass("gif");
                    drummerImage.attr("src", result[j].images.fixed_height_still.url);
                    drummerImage.attr("data-still", result[j].images.fixed_height_still.url);
                    drummerImage.attr("data-animate", result[j].images.fixed_height.url);
                    drummerImage.attr("data-state", "still");
                    gifDiv.append(p);
                    gifDiv.append(drummerImage);
                    $("#pics").prepend(gifDiv);
                }; 
            });
}

function imageState() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
};







    function animateGIF(event)  {
        event.preventDefault();
       
        console.log(searchTerm);
        $("#pics").empty();

         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
 
         $.ajax({
            url: queryURL,
            method: 'GET'
          }).then(function(response) {

                // Retrieving the URL for the image
                for (let j=0; j < response.data.length; j++)    {

                    var imgURL = response.data[j].images.fixed_height.url;
                    // var gifURL = response.data[j].images.fixed_height.url;

                    // Creating an element to hold the image
                    var image = $("<img>").attr("src", imgURL);
                    // var gif = $("<img>").attr("src", gifURL);

                    $("#pics").append(image);
                    // $("#pics").append(gif);
                    $("#pics").append(response.data[j].rating);
                }
            })

    };

// events

// page load
    pageLoad();
//    user clicks button
    $(document).on("click", ".drummer", chooseDrummer);
    // $("#buttons").on("click", function(event)  {
    //     chooseDrummer(event);
    // });
    
//    user clicks image
    // $("#pics").on("click", function(event)  {
    //     animateGIF(event);
    // });


// Clicking Image Event
    $(document).on("click", ".gif", imageState);




})
