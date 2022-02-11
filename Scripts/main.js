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
    recipes.forEach((recipe) => {
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
      } else if (
        recipe.description.toLowerCase().includes(word.toLowerCase())
      ) {
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
      } else {
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
const igBtn = document.getElementById("ingredients-btn");
const appBtn = document.getElementById("appareils-btn");
const utenBtn = document.getElementById("utensils-btn");

dropSearch.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropIngredient.style.display = "block";
  });
});

function closeBox() {
  dropIngredient.style.display = "none";
}
closeSearch.addEventListener("click", closeBox);
