function populatePage (inventory) {
	  // grab html slots to put cards
	  var contentEl = document.getElementById("test");
	  var carHolder = document.getElementById("carCard");
	  var carsData = "";
	  var currentCar;

	  // Loop over the inventory and populate the page
		for (var i = 0; i < inventory.cars.length; i++) {
		if (i % 3 === 0) {
			carsData += `<div class = "row">`;
		};
		carsData += `<div class="carCard col-md-4"${inventory[i]};">`;
	  	currentCar = inventory.cars[i];
	  	contentEl.innerHTML = "";
		  carsData += `<h1>${currentCar.make}</h1>`;
		    carsData += `<h2>${currentCar.model}</h2>`;
		      carsData += `<h3>${currentCar.year}</h3>`;
		        carsData += `<h4>${currentCar.price}</h4>`;
		          carsData += `<div id="Description">${currentCar.description}</div>`;
	  				carsData += `</div>`;

		 	if ((i + 1) % 3 === 0) {
		  	carsData += `</div>`;
		  };
		};
		contentEl.innerHTML = carsData;
		// call the function  activateEvents in secondIife
 	CarLot.activateEvents();
};
// Load the inventory and send a callback function to be
CarLot.loadInventory();
// CarLot.addBorderThicknessAndColor();
