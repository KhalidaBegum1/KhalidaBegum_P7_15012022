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
        let textIngredients = "";
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredient = recipes[i].ingredients[j];
          textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span> `;
        }
        recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipes[i].name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipes[i].time} min </span> </span>
        <span class="text-section"> <div class="recipe-ingredient"> 
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipes[i].description}  </div></span>
        </div>`;
      } else if (
        recipes[i].description.toLowerCase().includes(word.toLowerCase())
      ) {
        let textIngredients = "";
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredient = recipes[i].ingredients[j];
          textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span> `;
        }
        recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipes[i].name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipes[i].time} min </span> </span>
        <span class="text-section"><div class="recipe-ingredient">
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipes[i].description}  </div></span>
        </div>`;
      } else {
        let ingredientFiltered = [];
        for (let k = 0; k < recipes[i].ingredients.length; k++) {
          if (
            recipes[i].ingredients[k].ingredient
              .toLowerCase()
              .includes(word.toLowerCase())
          ) {
            ingredientFiltered.push(recipes[i].ingredients[k]);
          }
        }

        if (ingredientFiltered.length > 0) {
          let textIngredients = "";
          for (let j = 0; j < recipes[i].ingredients.length; j++) {
            let ingredient = recipes[i].ingredients[j];
            textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span> `;
          }
          recipeSection.innerHTML += `<div class="recipe-section" >
        <span class="title-section" ><div class="recipe-name">${recipes[i].name}  </div>
        <span class="recipe-time"><i class="far fa-clock"></i> ${recipes[i].time} min </span> </span>
        <span class="text-section"><div class="recipe-ingredient">
       ${textIngredients}</div>
         <div class="recipe-description">  ${recipes[i].description}  </div></span>
        </div>`;
        }
      }
    }
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

let dropSearch = document.querySelector(".label-btn");
let closeSearch = document.querySelector(".close-btn");
const dropIngredient = document.querySelector(".search-ingredient");
const dropAppareil = document.querySelector(".search-appareil");
const dropUtensil = document.querySelector(".search-utensil");
const displaySearch = document.querySelector(".display-search");
const igBtn = document.getElementById("ingredients-btn");
const appBtn = document.getElementById("appareils-btn");
const utenBtn = document.getElementById("utensils-btn");
let ingFilter = document.querySelector("#ingredients-filter");
let appFilter = document.querySelector("#appareils-filter");
let ustFilter = document.querySelector("#utensils-filter");
let recipeAppliance = "";
let recipeIngredient = "";
let recipeUtensils = [];

function launchIng() {
  dropIngredient.style.display = "block";
  recipes.ingredients.forEach((ingredient) => {
    recipeIngredient += `${ingredient.ingredient}`;
  });
  ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li> ${recipeIngredient}</li>
  </ul></div> `;
}
igBtn.addEventListener("click", launchIng);

function launchApp() {
  dropAppareil.style.display = "block";
  recipes.forEach((recipes) => {
    recipeAppliance += `${recipes.appliance}`;
  });
  appFilter.innerHTML += `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li> ${recipeAppliance}</li>
  </ul></div> `;
}
appBtn.addEventListener("click", launchApp);

function launchUst() {
  dropUtensil.style.display = "block";
  recipes.forEach((recipes) => {
    recipeUtensils += `${recipes.ustensils}`;
  });
  ustFilter.innerHTML += `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list">
  <li> ${recipeUtensils}</li>
  </ul></div> `;
}
utenBtn.addEventListener("click", launchUst);

function closeBox() {
  displaySearch.style.display = "none";
}
closeSearch.addEventListener("click", closeBox);
//closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));

/*closeSearch.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropSearch.style.display = "none";
  });
});*/
