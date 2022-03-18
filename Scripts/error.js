/*const errorMessage = document.getElementById("msg-error");

function isNotValid() {
  if (!word) {
  }
}

const showError = (isWrong, errorMessage) => {
  if (isWrong) {
    errorMessage.style.display = "inline";
  } else {
    //by default errorMessage is displayed none
    errorMessage.style.display += "help";
  }
};
console.log(errorMessage);*/
const mainSearch = document.querySelector("#main-search_input");
const word = mainSearch.value;

function showError() {
  var errorMessage = document.getElementById("msg-error");
  if (word === !mainSearch.value) {
    // Changing content and color of content
    errorMessage.textContent = "Pas de recettes trouvées";
    errorMessage.style.color = "red";
  } else {
    errorMessage.textContent = "";
  }
}
