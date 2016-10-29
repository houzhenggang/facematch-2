numberOfFaces = 5;
counter = 0;
function generateFaces() {

	leftSide = document.getElementById('leftSide');
	rightSide = document.getElementById('rightSide');
	theBody = document.body;

	for(i=0; i<numberOfFaces; i++) {

		var img = document.createElement('img');
		img.src = "smile.png";

		var randomPosition = Math.random() * 400;
		randomPosition = Math.floor(randomPosition);
		randomPosition += 1;

		img.style.top = randomPosition + "px";

		var randomPosition = Math.random() * 400;
		randomPosition = Math.floor(randomPosition);
		randomPosition += 1;

		img.alt = "face";
		img.style.left = randomPosition + "px";
		leftSide.appendChild(img);

		var leftSideImages = leftSide.cloneNode(true);
		leftSideImages.removeChild(leftSideImages.lastChild);
		rightSide.appendChild(leftSideImages);

	}

	leftSide.lastChild.onclick = function nextLevel(event) {
			event.stopPropagation();
			while (leftSide.firstChild && rightSide.firstChild) {
				leftSide.removeChild(leftSide.firstChild);
				rightSide.removeChild(rightSide.firstChild);
			}
			counter++;
			numberOfFaces += 5;
			generateFaces();
	}

	theBody.onclick = function gameOver() {
		alert('Game Over!\n\nYour Total Score is '+counter);
		theBody.onclick = null;
		leftSide.lastChild.onclick = null;
	}
}