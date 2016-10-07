var CarLot = (function (NewCarLot) {
		// grab all inputs globally 
		var carHolder = document.getElementsByClassName("carCard");
		var newInputField = document.getElementById("inputField");
		var descriptionInput = document.getElementById("Description");
		var targetToEdit = "";
		// itterates through the car cards 
	NewCarLot.activateEvents = function() {
	    for (var i = 0; i < carHolder.length; i++) {
	      var containerEl = carHolder[i];
	      // add event listener to car cards
	      containerEl.addEventListener("click", function(event) {
	            targetToEdit = this.childNodes[4];
	            newInputField.focus();
	            newInputField.value = targetToEdit.innerHTML;
	            this.classList.toggle("border");
	           	$(this).css("background-color", "#C5CADF");
	            // add event listener to input
	            newInputField.addEventListener("input", function(e) {
	                  targetToEdit.innerHTML = newInputField.value;
	                  e.preventDefault();
	                  $(this).css("background-color", "#C5CADF");
	                  if (e.keyCode === 13) {
	            // remove event listener
	                    newInputField.removeEventListener("input", function() {
	                     $(this).css("background-color", "#2A4E6E");
	                     newInputField.blur();
	                    });
				
				}
			});
		});
	};
};	
	return(NewCarLot);

})(CarLot || {});