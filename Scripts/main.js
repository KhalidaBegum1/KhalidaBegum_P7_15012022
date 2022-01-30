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
/*
let ingredients = document.querySelectorAll(recipes.ingredients);
for (let i = 0; i < ingredients.length; i++){
  if (recipes[i].ingredients.toLowerCase().includes(word.toLowerCase())) {
 recipeSection.innerHTML +=
    '<div class="recipe-card">' + recipes[i].ingredients + "</div>";
  }
}*/



//let ingredients = document.querySelectorAll(recipes.ingredients);
//let ingredients = ingredients.toString();

recipes.forEach((recipes, ingredients) => {
  const recipeCard = (recipeSection.innerHTML += ` 
  <div class="recipe-section" >
  <span class="title-section" ><div class="recipe-name">${recipes.name}  </div>
  <span class="recipe-time"><i class="far fa-clock"></i> ${recipes.time} min </span> </span>
  <span class="text-section"><div class="recipe-ingredient"> ${recipes.ingredients}<span> ${ingredients.quantity}</span> <span>${ingredients.units}</span></div>
  <div class="recipe-description">  ${recipes.description}  </div></span>
  </div>
  `);
});

/*for (let i = 0; i < recipes.length; i++) {
  recipeSection.innerHTML +=
    '<div class="recipe-card">' + recipes[i].name + "</div>";
}*/
