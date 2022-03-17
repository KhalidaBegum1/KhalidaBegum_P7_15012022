const errorMessage = document.getElementById("#msg-error");


function isNotValid() {
   if (!word){
       
   }
  }

  const showError = (isWrong, errorMessage) => {
    if (isWrong) {
        errorMessage.style.display = "inline";
    } else {
      //by default errorMessage is displayed none
      errorMessage.style.display = "";
    }
  };
  