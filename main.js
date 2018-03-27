$( document ).ready(function() {

    // populate buttons array 
    var drummers = ["John Bonham", "Neil Pert", "Keith Moon", "Dave Grohl", "Carter Buford", "Lars Ulrich"];
    var searchTerm = "";

    for (let i=0; i < drummers.length; i++) {

        var a = $("<button>");
        // Adding a class
        a.addClass("drummer");
        // Adding a data-attribute with a value of the drummer at index i
        a.attr("data-name", drummers[i]);
        // Providing the button's text with a value of the drummer at index i
        a.text(drummers[i]);
        // Adding the button to the HTML
        $("#buttons").append(a);

        $(a).on("click", function(event) {
            event.preventDefault();
            searchTerm = drummers[i];
            console.log(searchTerm);

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

            $.ajax({
              url: queryURL,
              method: 'GET'
            }).then(function(response) {
              console.log(response);
              $("#pics").append(response);
            });

          });

    };


})