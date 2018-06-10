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
	       
	        console.log(response);
			const results = response.data;
	       
	
	        for (var i = 0; i < results.length; i++) {
				
			const subjectDiv = document.createElement('div');
			const p = document.createElement('p');
	     
			p.innerText = results[i].rating;
	        
			const subjectImage = document.createElement('img'); 
			subjectImage.src = results[i].images.fixed_height.url;
			subjectImage.className = 'gif';
	        
			subjectDiv.appendChild(p);
			subjectDiv.appendChild(subjectImage);
			
			$('#displayGIFS').prepend(subjectDiv);
	       
	         }
	
	      });
}

// f(x) to pause gifs


buttons.addEventListener('click', gifsOutput);




