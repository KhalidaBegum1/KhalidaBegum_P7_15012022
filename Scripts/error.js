const errorMessage = {
  word: "Error pas de recettes trouvées",
};
function createErrorMessage(id, message) {
  const errorMsg = document.createElement("span");
  errorMsg.textContent = message;
  document.getElementById(id).parentElement.appendChild(errorMsg);
  errorMsg.classList.add("message-error");
  return errorMsg;
}
const searchError = createErrorMessage("recipes", errorMessage.word);

/*const showError = (isWrong, errorMsg) => {
  if (isWrong) {
    errorMsg.style.display = "inline";
  } else {
    //by default errorMsg is displayed none
    errorMsg.style.display = "none";
  }
};*/

const showError = (isWrong, domError) => {
  domError.innerHTML = "";
  if (isWrong) {
    domError.style.display = "block";
  } 
};

