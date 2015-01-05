function shuffle(array) { // Fisher Yates Shuffle
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function montyHall() {
	var doors = ["goat", "car", "goat"];
	var timesRun = 0;
	var timesWonSameDoor = 0;
	var timesWonChangedDoor = 0;

	while (timesRun < 1000) {
		var doors = shuffle(doors); // randomizes door prizes.
		var choice = Math.floor(Math.random() * 3); // chooses a door from 0-2.
		for (i=0; i < doors.length; i++) {
			if ( i == choice) {
				var currentPrize = doors[i];
				if (currentPrize == "car") {
					timesWonSameDoor++;
				}
				else {
					timesWonChangedDoor++; // if you chose "goat", "car" is included in the remaining doors, so you would have won had you switched.
				}
			}
		}
		timesRun++;
	}

	var timesWonPercent = (timesWonSameDoor/1000) * 100;
	var timesLostPercent = (timesWonChangedDoor/1000) * 100; // percent of times lost is equal to the percent of times won had you switched doors.

	console.log("If you didn't change doors, You won " + timesWonPercent +"% of the time and lost " + timesLostPercent + "% of the time.\nIf you changed your door, you won " + timesLostPercent + "% of the time and lost " + timesWonPercent + "% of the time.");
}