import { recipes } from "./recipes.js";

const mainSearch = document.querySelector("#main-search_input");
const secondarySearch = document.querySelectorAll(".label-input");
const selectedTagsContainer = document.getElementById("selected-tags-list");

/*secondarySearch.forEach((input) =>
  input.addEventListener("click", openDropList)
);*/

const recipeSection = document.querySelector("#recipes");
recipeSection.innerHTML = "";

for (let i = 0; i < recipes.length; i++) {
  recipeSection.innerHTML +=
    '<div class="recipe-card">' + recipes[i].name + "</div>";
}

