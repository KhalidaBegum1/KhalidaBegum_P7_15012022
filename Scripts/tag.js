import { recipes } from "./recipes.js";

//retrieve DOM elements
let ingSearch = document.querySelector("#ing-search");
let appSearch = document.querySelector("#app-search");
let utenSearch = document.querySelector("#uten-search");

//filter tag according to tagword searched
export function sortIngTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";

  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    //check each recipe
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];
      //for each ingredient in recipes check word and add to temporary array
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
        if (
          recipes[i].ingredients[k].ingredient
            .toLowerCase()
            .includes(tagWord.toLowerCase())
        ) {
          ingredientFiltered.push(recipes[i].ingredients[k]);
        }
      }
      //add each filtered ingredient to the DOM
      if (ingredientFiltered.length > 0) {
        let textIngredients = "";
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredient = recipes[i].ingredients[j];
          textIngredients += ` ${ingredient.ingredient}
          <span> ${ingredient.quantity}</span> 
          <span>${ingredient.unit}</span>`;
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
ingSearch.addEventListener("change", sortIngTag);

//filter tag according to tagword searched
export function sortAppTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";

  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    //check each recipe
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];
      //for each appliance in recipes check word and add to temporary array
      if (recipes[i].appliance.toLowerCase().includes(tagWord.toLowerCase())) {
        ingredientFiltered.push(recipes[i].appliance);
      }
      //add each filtered appliance to the DOM
      if (ingredientFiltered.length > 0) {
        let textIngredients = "";
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredient = recipes[i].ingredients[j];
          textIngredients += ` ${ingredient.ingredient}
            <span> ${ingredient.quantity}</span> 
            <span>${ingredient.unit}</span>`;
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
appSearch.addEventListener("change", sortAppTag);

//filter tag according to tagword searched
export function sortUtenTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";

  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    //check each recipe
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];

      for (let k = 0; k < recipes[i].ustensils.length; k++) {
        //for each ustensils in recipes check word and add to temporary array
        if (
          recipes[i].ustensils[k].toLowerCase().includes(tagWord.toLowerCase())
        ) {
          ingredientFiltered.push(recipes[i].ustensils[k]);
        }
      }
      //add each filtered ustensils to the DOM
      if (ingredientFiltered.length > 0) {
        let textIngredients = "";
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredient = recipes[i].ingredients[j];
          textIngredients += ` ${ingredient.ingredient}
            <span> ${ingredient.quantity}</span> 
            <span>${ingredient.unit}</span>`;
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
utenSearch.addEventListener("change", sortUtenTag);
