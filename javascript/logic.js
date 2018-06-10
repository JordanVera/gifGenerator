/* API KEY = oUK8coAde2ynIwuhI2rWlMQpcR5pj477
_____________________________________________________*/


/* Global Variables
_____________________________________________________*/
let topics	  = ['math', 'science', 'english', 'gym'];
const buttons = document.querySelector('#buttons');
const gifs 	  = document.querySelector('#displayGIFS');
	  

/* Functions F(X)
_____________________________________________________*/


 // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
		while (buttons.firstChild) buttons.removeChild(buttons.firstChild);
		

        // Looping through the array of movies
        for (let i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = document.createElement('button');
          // Adding a class
          a.className = 'subject';
          // Added a data-attribute
          a.setAttribute("data-name", topics[i]);
          // Provided the initial button text
          a.innerHTML = `${topics[i]}`;
          // Added the button to the HTML
          buttons.appendChild(a);
        }
      }
      
      renderButtons();


// f(x) for displaying GIFS
function gifsOutput() {
	while (gifsOutput.firstChild) gifsOutput.removeChild(gifsOutput.firstChild);
	
	const input    = $(this).attr('data-name'),
		  limit 	   = 10,
		  queryURL =  `https:\/\/api.giphy.com/v1/gifs/search?q=${input}&limit=${limit}&api_key=oUK8coAde2ynIwuhI2rWlMQpcR5pj477`,
		  xhr 	   = new XMLHttpRequest();
		 
	// AJAX REQUEST
	  $.ajax({
	        url: queryURL,
	        method: "GET"
	      }).then(function(response) {
	        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
	        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
	
	        console.log(response);
	
	        // Step 2: since the image information is inside of the data key,
	        // make a variable named results and set it equal to response.data
	
	        // =============== put step 2 in between these dashes ==================
			const results = response.data;
	        // ========================
	
	        for (var i = 0; i < results.length; i++) {
	
	        // Step 3: uncomment the for loop above and the closing curly bracket below.
	        // Make a div with jQuery and store it in a variable named animalDiv.
			const subjectDiv = document.createElement('div');
	        // Make a paragraph tag with jQuery and store it in a variable named p.
			const p = document.createElement('p');
	        // Set the inner text of the paragraph to the rating of the image in results[i].
			p.innerText = results[i].rating;
	        // Make an image tag with jQuery and store it in a variable named animalImage.
			const subjectImage = document.createElement('img').setAttribute('src', results[i].images.url);
	        // Set the image's src to results[i]'s fixed_height.url.
	        // Append the p variable to the animalDiv variable.
			subjectDiv.appendChild(p, subjectImage);
	        // Append the animalImage variable to the animalDiv variable.
	        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
			$('#displayGIFS').prepend(subjectDiv);
	        // ============= put step 3 in between these dashes ======================
	
	        // ==================================
	         }
	
	      });
}


buttons.addEventListener('click', gifsOutput);




