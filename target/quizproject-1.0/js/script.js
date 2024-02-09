// Save the initial title
var initialTitle = document.title;
var QuestionTitle = document.getElementById("main-title")
var Anwnser1 = document.getElementById('A1');
var Anwnser2 = document.getElementById('A2');
var Card = document.getElementById("card-awnser");

function changeTitleOnBlur() {
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = "Kom terug ik mis je! 😏";
    } else {
      document.title = initialTitle;
    }
  }); 
}

changeTitleOnBlur();
