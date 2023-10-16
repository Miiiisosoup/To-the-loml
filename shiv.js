var painArray = ["ALOT", "Yeah", "Mmkay", "Ouch", "Owwwww", "AHHHHHHH"];
var pain = {};

for (var i = 0; i < painArray.length; i++) {
  pain[i] = painArray[i];
}

var needle = document.getElementById("needle");
var slider = document.getElementById("slider");
var level = document.getElementById("level");
level.style.visibility = "visible"; // Make the label initially visible

function findPainLevel(value) {
  var painLevel = Math.floor(value / (Math.round(100 / 6)));
  return painLevel;
}

function moveGauge(input) {
  var value = Number(input);
  var maxScale = 943;
  var minScale = 471;
  var maxDegree = 85;
  var scaledValue = ((maxScale - minScale) / 100) * value + minScale;
  var midScale = (maxScale - minScale) / 2 + minScale;

  var rotate = scaledValue <= midScale ? 1 : -1;
  var scalePerDegree = (midScale - minScale) / maxDegree;
  var rotateValue = (midScale - scaledValue) / scalePerDegree;
  var rotation = rotate * rotateValue;
  var tl = new TimelineLite();
  tl.to(needle, 1, { rotation: rotateValue });
}

function toggleFaceVisibility(faceId) {
  var faces = document.querySelectorAll(".faces g");
  faces.forEach(function (face) {
    face.style.visibility = "hidden";
  });

  var selectedFace = document.querySelector(".faces #" + faceId);
  if (selectedFace) {
    selectedFace.style.visibility = "visible";
  }
}

slider.oninput = function () {
  var currentLevel = this.value;
  var painLevel = findPainLevel(currentLevel);
  moveGauge(currentLevel);
  level.innerHTML = painArray[painLevel]; // Display the corresponding pain level
  toggleFaceVisibility(pain[painLevel]);

  var selectedFace = painArray[painLevel];
  if (selectedFace === "ALOT" || selectedFace === "Ouch" || selectedFace === "Owwwww"|| selectedFace === "Mmkay"|| selectedFace === "AHHHHHHH"|| selectedFace === "Yeah") {

    handleYouTubeLink(selectedFace);
  }

  if (painArray[painLevel] === "ALOT"||painArray[painLevel] === "Yeah"||painArray[painLevel] === "Ouch"||painArray[painLevel] === "Owwwww"||painArray[painLevel] === "AHHHHHHH"||painArray[painLevel] === "Mmkay") {
    passwordInputContainer.style.display = "block";
  } else {
    passwordInputContainer.style.display = "none";
  }
};

const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitPassword");
const passwordInputContainer = document.getElementById("passwordInput");
const hintElement = document.getElementById("hintElement");

function validatePassword(painLevel) {
  const enteredPassword = passwordInput.value;
  return enteredPassword === passwordForLevels[painLevel];
}
// ... (your existing code)

const passwordHints = {
  "ALOT": "Hint: It's my name",
  "Yeah": "Hint: It's my name",
  "Mmkay": "Hint: A casual response",
  "Ouch": "Hint: Expressing pain",
  "Owwwww": "Hint: A prolonged expression of pain",
  "AHHHHHHH": "Hint: A loud scream",
};

function handleYouTubeLink(selectedFace) {
  if (selectedFace === "ALOT" || selectedFace === "Ouch" || selectedFace === "Owwwww"|| selectedFace === "Mmkay"|| selectedFace === "AHHHHHHH"|| selectedFace === "Yeah") {
    var youtubeLink = linksForLevels[selectedFace];
    if (youtubeLink) {
      if (validatePassword(selectedFace)) {
        window.location.href = youtubeLink;
      }
     }
    }
  }


submitButton.addEventListener("click", function () {
  var currentLevel = slider.value;
  var painLevel = findPainLevel(currentLevel);
  var selectedFace = painArray[painLevel];
  var enteredPassword = passwordInput.value;

  if (selectedFace === "ALOT" || selectedFace === "Ouch" || selectedFace === "Owwwww"|| selectedFace === "Mmkay"|| selectedFace === "AHHHHHHH"|| selectedFace === "Yeah") {
    if (validatePassword(selectedFace)) {
      handleYouTubeLink(selectedFace);
    } 
  }
});

passwordInput.addEventListener("input", function () {
  var currentLevel = slider.value;
  var painLevel = findPainLevel(currentLevel);
  var selectedFace = painArray[painLevel];

  if (selectedFace in passwordHints) {
    var hintMessage = passwordHints[selectedFace];
    hintElement.innerHTML = hintMessage;
  }else {
    hintElement.innerHTML = "";
  }
});

submitButton.addEventListener("click", function () {
  var currentLevel = slider.value;
  var painLevel = findPainLevel(currentLevel);
  var selectedFace = painArray[painLevel];
  var enteredPassword = passwordInput.value;

  if (selectedFace === "ALOT" || selectedFace === "Ouch" || selectedFace === "Owwwww"|| selectedFace === "Mmkay"|| selectedFace === "AHHHHHHH"|| selectedFace === "Yeah") {
    if (validatePassword(selectedFace)) {
      handleYouTubeLink(selectedFace);
    }else{
      alert("Incorrect password babe.Try again")
    }
  }
  if(enteredPassword === "")
  alert("You gotta enter the password lol")
});

const passwordForLevels = {
  "ALOT": "vijetha",
  "Yeah": "vijetha",
  "Mmkay": "vijetha",
  "Ouch": "vijetha",
  "Owwwww": "vijetha",
  "AHHHHHHH": "vijetha",
  
};

const linksForLevels = {
  "ALOT": "https://youtu.be/FGHNp-mCWPY?si=whNaNPp72cmYFqQ",
  "Yeah": "https://youtu.be/FGHNp-mCWPY?si=whNaNPp72cmYFqQ",
  "Mmkay": "https://youtu.be/FGHNp-mCWPY?si=whNaNPp72cmYFqQ",
  "Ouch": "https://youtu.be/fUwNMkhwbWM?si=VaB_iBrua5B8cxpW",
  "Owwwww": "https://youtu.be/FGHNp-mCWPY?si=whNaNPp72cmYFqQ",
  "AHHHHHHH": "https://youtu.be/FGHNp-mCWPY?si=whNaNPp72cmYFqQ",
};

passwordInputContainer.style.display = "none";
