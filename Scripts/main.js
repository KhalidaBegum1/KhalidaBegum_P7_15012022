import { recipes } from "./recipes.js";
const mainSearch = document.querySelector("#main-search_input");
const searchBtn = document.querySelector("#main-search_btn");
const recipeSection = document.querySelector("#recipes");
recipeSection.innerHTML = "";

searchBtn.addEventListener("click", search);
mainSearch.addEventListener("change", search);
function search(event) {
  const word = mainSearch.value;
  if (word.length >= 3) {
    recipeSection.innerHTML = "";
    //research on each recipes
    recipes.forEach((recipe) => {
      //check if name of recipes matches with word
      if (recipe.name.toLowerCase().includes(word.toLowerCase())) {
        let textIngredients = "";
        recipe.ingredients.forEach((ingredient) => {
          textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span> `;
        });
        recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipe.name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipe.time} min </span> </span>
        <span class="text-section"> <div class="recipe-ingredient"> 
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipe.description}  </div></span>
        </div>`;
      }
      //check if description matches with word
      else if (recipe.description.toLowerCase().includes(word.toLowerCase())) {
        let textIngredients = "";
        recipe.ingredients.forEach((ingredient) => {
          textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span> `;
        });
        recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipe.name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipe.time} min </span> </span>
        <span class="text-section"><div class="recipe-ingredient">
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipe.description}  </div></span>
        </div>`;
      }
      //check if each ingredient matches with word
      else {
        let ingredientFiltered = recipe.ingredients.filter((ing) =>
          ing.ingredient.toLowerCase().includes(word.toLowerCase())
        );

        if (ingredientFiltered.length > 0) {
          let textIngredients = "";
          recipe.ingredients.forEach((ingredient) => {
            textIngredients += ` ${ingredient.ingredient}
            <span> ${ingredient.quantity}</span> 
            <span>${ingredient.unit}</span> `;
          });
          recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipe.name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipe.time} min </span> </span>
        <span class="text-section"><div class="recipe-ingredient">
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipe.description}  </div></span>
        </div>`;
        }
      }
    });
  }
}

recipes.forEach((recipes) => {
  let textIngredients = "";
  recipes.ingredients.forEach((ingredient) => {
    textIngredients += ` ${ingredient.ingredient}
    <span> ${ingredient.quantity}</span> 
    <span>${ingredient.unit}</span> `;
  });
  recipeSection.innerHTML += ` 
  <div class="recipe-section" >
  <span class="title-section" ><div class="recipe-name">${recipes.name}  </div>
  <span class="recipe-time"><i class="far fa-clock"></i> ${recipes.time} min </span> </span>
  <span class="text-section"><div class="recipe-ingredient">   ${textIngredients}
  </div>
  <div class="recipe-description">  ${recipes.description}  </div></span>
  </div>
  `;
});

let dropSearch = document.querySelectorAll(".label-btn");
const closeSearch = document.querySelector(".search-close");
const dropIngredient = document.querySelector(".search-ingredient");
const dropAppareil = document.querySelector(".search-appareil");
const dropUtensil = document.querySelector(".search-utensil");

dropSearch.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropIngredient.style.display = "block";
  });
});

//addEvent to closeBox onclick
function closeBox() {
  dropIngredient.style.display = "none";
  dropAppareil.style.display = "none";
  dropUtensil.style.display = "none";
}

closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));
