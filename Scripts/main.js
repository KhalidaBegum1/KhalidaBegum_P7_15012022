import { recipes } from "./recipes.js";

const mainSearch = document.querySelector("#main-search_input");
const secondarySearch = document.querySelectorAll(".label-input");
const selectedTagsContainer = document.getElementById("selected-tags-list");
const searchBtn = document.querySelector("#main-search_btn");
const recipeSection = document.querySelector("#recipes");
recipeSection.innerHTML = "";

searchBtn.addEventListener("click", search);
mainSearch.addEventListener("change", search);
function search(event) {
  const word = mainSearch.value;
  if (word.length >= 3) {
    recipeSection.innerHTML = "";
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name.toLowerCase().includes(word.toLowerCase())) {
        recipeSection.innerHTML +=
          '<div class="recipe-card">' + recipes[i].name + "</div>";
      }
    }
  }
}

/*secondarySearch.forEach((input) =>
  input.addEventListener("click", openDropList)
);*/

for (let i = 0; i < recipes.length; i++) {
  recipeSection.innerHTML +=
    '<div class="recipe-card">' + recipes[i].name + "</div>";
}
