$(document).ready(function() {
    // Variables
    var drummers = ["Jimi Hendrix", "John Lennon", "Fats Domino", "Buddy Holly", "Freddie Mercury", "Sid Vicious", "Kurt Kobain", "Eddie Vedder", "Ozzy Osbourne"];

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


    function addButton() {
        var topic = $(".topic-input").val().trim();
        drummers.push(topic);
    }

    // events

    // page load
    pageLoad();
    // user clicks button
    $(document).on("click", ".drummer", chooseDrummer);
    // Clicking Image Event
    $(document).on("click", ".gif", imageState);
    //Adding Button Event
    $(".add-topic").on("click", function(event){
        event.preventDefault();
        addButton();
        pageLoad();
    });
});
