(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img");

	function changeHeadLine() {
		document.querySelector("h1").textContent = "Hey there from JS!";
		document.querySelector("p").textContent = "This is the subhead";
	}

	// to make sure that your javascript is synced in with the web
	// set up the puzzle pieces and boards
	theButton.addEventListener("click", changeHeadLine);
	
	
})();
