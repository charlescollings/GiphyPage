// $( document ).ready(function() {
// // 
// //  // populate buttons array 
// var drummers = ["John Bonham", "Ringo Star", "Keith Moon", "Dave Grohl", "Gene Krupa", "Lars Ulrich", "Buddy Rich", "Neil Peart", "Stewert Copeland"];
// 
// //  var searchTerm = "";
// 
//   for (var i=0; i < drummers.length; i++) {
//     
//       var a = $("<button>");
//       // Adding a class
//       a.addClass("drummer");
//       // Adding a data-attribute with a value of the drummer at index i
//       a.attr("data-name", drummers[i]);
//       // Providing the button's text with a value of the drummer at index i
//       a.text(drummers[i]);
//       // Adding the button to the HTML
//       console.log(a)
//       $("#buttons").append(a);
//   };
// 
//         $(a).on("click", function(event) {
//             event.preventDefault();
// 
//             $("#pics").empty();
// 
//             searchTerm = drummers[i];
//             console.log(searchTerm);
// 
//             var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
// 
//             $.ajax({
//               url: queryURL,
//               method: 'GET'
//             }).then(function(response) {
// 
//                     // Retrieving the URL for the image
//                     for (let j=0; j < response.data.length; j++)    {
// 
//                         var imgURL = response.data[j].images.fixed_height_still.url;
//                         var gifURL = response.data[j].images.fixed_height.url;
// 
//                         // Creating an element to hold the image
//                         var image = $("<img>").attr("src", imgURL);
//                         var gif = $("<img>").attr("src", gifURL);
// 
// 
//                         $("#pics").append(image);
//                         $("#pics").append(response.data[j].rating);
// 
//                         $(image).on ("click", function() {
//                             console.log("clicked");
//                             // $("#pics").empty();
//                             // $("#pics").append(gif);
//                             // $(image).replaceWith();
//                         })
// 
//                     };
//                 });
//             
// 
//         });
// 
//     };
// 
// 
// });



$(document).ready(function() {
// Variables
var drummers = ["John Bonham", "Ringo Star", "Keith Moon", "Dave Grohl", "Gene Krupa", "Lars Ulrich", "Buddy Rich", "Neil Peart", "Stewert Copeland"];
var searchTerm = "";

      
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

// functions
    function chooseDrummer(event)    {
         
         event.preventDefault();
         searchTerm = ($(event.target).attr("data-name"));
         // console.log(searchTerm);
         $("#pics").empty();

         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
 
         $.ajax({
            url: queryURL,
            method: 'GET'
          }).then(function(response) {

                // Retrieving the URL for the image
                for (let j=0; j < response.data.length; j++)    {

                    var imgURL = response.data[j].images.fixed_height_still.url;
                    // var gifURL = response.data[j].images.fixed_height.url;

                    // Creating an element to hold the image
                    var image = $("<img>").attr("src", imgURL);
                    // var gif = $("<img>").attr("src", gifURL);

                    $("#pics").append(image);
                    // $("#pics").append(gif);
                    $("#pics").append(response.data[j].rating);
                }
            })
    }

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
//    user clicks button
    $("#buttons").on("click", function(event)  {
        chooseDrummer(event);
    });
    
//    user clicks image
    $("#pics").on("click", function(event)  {
        animateGIF(event);
    });





})
