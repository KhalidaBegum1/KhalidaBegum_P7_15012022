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

export const showError = (isWrong) => {
  let errorMsg = document.querySelector(".message-error");
  if (isWrong) {
    errorMsg.style.display = "inline";
  } else {
    //by default errorMsg is displayed none
    errorMsg.style.display = "none";
  }
};
