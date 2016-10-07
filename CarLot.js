var CarLot = (function () {
		// empty array to hold inventory
		var inventory = [];

	return {

		loadInventory: function() {
			function executeThisCodeIfXHRFails() {
		    console.log("An error occurred while transferring");
		  	}
		  	// loads JSON into inventory [] then calls populatePage function in quiz.js
	  	 	function executeThisCodeAfterFileLoaded() {
			    inventory = JSON.parse(this.responseText);
			    populatePage(inventory);
			};

			var inventoryLoader = new XMLHttpRequest();
			inventoryLoader.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
			inventoryLoader.addEventListener("error", executeThisCodeIfXHRFails)
			inventoryLoader.open("GET", "inventory.json")
			inventoryLoader.send();
		},
		
		getInventory:function() {
			return inventory;
		}
	}

})(CarLot || {});

