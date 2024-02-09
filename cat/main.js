// Function to play cat sound
function playCatSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

// Add event listeners for all buttons
for (let i = 1; i <= 24; i++) {
  const button = document.getElementById(`button${i}`);
  button.addEventListener('click', function() {
      playCatSound(`./cat-sounds/cat_sound${i}.wav`); // Replace with actual sound file names
  });
}

// Add event listener for keyboard keydown
document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase(); // Convert the pressed key to uppercase for consistency
  let buttonNumber;

  if (key >= "0" && key <= "9") {
      buttonNumber = parseInt(key, 10);
  } else if (key >= "A" && key <= "F") {
      // For keys A to F, map them to buttons 11 to 16
      buttonNumber = key.charCodeAt(0) - "A".charCodeAt(0) + 11;
  } else {
      return; // Ignore other keys
  }

  const button = document.getElementById(`button${buttonNumber}`);
  if (button) {
      button.click(); // Trigger button click event
  }
});
