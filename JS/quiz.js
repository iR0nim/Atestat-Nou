function checkAnswer() {
  var answer = document.querySelector('input[name="planet"]:checked').value;
  var result = document.getElementById("result");
  if (answer == "1") {
    result.innerHTML = "Iti place Mercur!";
  } else if (answer == "2") {
    result.innerHTML = "Iti place Venus!";
  } else if (answer == "3") {
    result.innerHTML = "Iti place Pamantul!";
  } else if (answer == "4") {
    result.innerHTML = "Iti place Marte!";
  } else if (answer == "5") {
    result.innerHTML = "Iti place Saturn!";
  } else if (answer == "6") {
    result.innerHTML = "Iti place Neptun!";
  }
  var quiz = document.getElementById("quiz");
  quiz.style.backgroundColor = "rgb(225,225,225)";
}
