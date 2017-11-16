let wins = 0;       // Win counter
let losses = 0;     // Loss counter
let target;         // Target value
let score;          // User score
let crystalValues;  // Crystal value

// Array of images
const images = ["assets/images/blue.JPG", "assets/images/purple.JPG", "assets/images/yellow.JPG", "assets/images/green.JPG"];
// Backup names for images
const imgAlts = ["Blue Crystal", "Purple Crystal", "Yellow Crystal", "Green Crystal"];

// Click event when user clicks on crystal
$(document).on("click", ".crystal-image", function() {
  // Stores value of clicked crystal in variable
  let crystalValue = ($(this).attr("data-value"));
  // Changes variable to int
  crystalValue = parseInt(crystalValue);
  // Adds to user score
  score += crystalValue;
  // Updates HTML to display score
  $("#userScore").text(score);

  // If user achieves target score
  if (score === target) {
    // Increment win counter
    wins++;
    // Display message
    $("#result").text("You Won!");
    // Start new game
    newGame();
  }
  // If user goes over target score
  else if (score >= target) {
    // Increment loss counter
    losses++;
    // Display message
    $("#result").text("You Lost.");
    // Start new game
    newGame();
  }
});

// Set up game
function newGame () {
  // Display user wins
	$("#totalWins").text(wins);
  // Display user losses
	$("#totalLosses").text(losses);
  // Get target score between 19 and 120
  target = Math.floor((Math.random() * 102) + 19);
  // Display target score
  $("#targetScore").text(target);
  // Reset user score to 0
  score = 0;
  // Display user score
  $("#userScore").text(score);
  // Setup array of crystal's randomized values using getCrystalValue function
  crystalValues = [getCrystalValue(), getCrystalValue(), getCrystalValue(), getCrystalValue()];
  // Remove crystal images
  $("#crystals").html("");
  // Call setupCrystal function
	setupCrystals();
}

// Returns a random number between 1 and 12
function getCrystalValue() {
  return Math.floor((Math.random() * 12) + 1);
}

// Creates crystals and appends to HTML
function setupCrystals() {
  // Sets up 4 crystals
	for (let i = 0; i < crystalValues.length; i++) {
    // Container of crystal image
		let image = $("<img>");
    // Create class for image
		image.addClass("crystal-image");
    // Add src tag to image
		image.attr("src", images[i]);
    // Assign data value to crystal image
		image.attr("data-value", crystalValues[i]);
    // Give image an alt
    image.attr("alt", imgAlts[i]);
    // Append image to html
		$("#crystals").append(image);
	}
}

// Start game
newGame();