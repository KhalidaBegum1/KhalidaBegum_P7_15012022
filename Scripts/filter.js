import { recipes } from "./recipes.js";

let closeSearch = document.querySelectorAll(".close-btn");
const dropIngredient = document.querySelector(".search-ingredient");
const dropAppareil = document.querySelector(".search-appareil");
const dropUtensil = document.querySelector(".search-utensil");
const igBtn = document.getElementById("ingredients-btn");
const appBtn = document.getElementById("appareils-btn");
const utenBtn = document.getElementById("utensils-btn");
let ingFilter = document.querySelector("#ingredients-filter");
let appFilter = document.querySelector("#appareils-filter");
let ustFilter = document.querySelector("#utensils-filter");
let recipeAppliance = "";
let recipeIngredient = "";
let recipeUtensils = [];
const recipeSection = document.querySelector("#recipes");
recipeSection.innerHTML = "";

function displayTag(event, type) {
  let tagBox = document.querySelector(".tag-box");
  tagBox.style.display = "flex";
  tagBox.innerHTML += `<li class="${type}-tags">
  <input class="tag-input" type="checkbox" name="" />
  <label class="tag-label" for="${type}">${event}</label>
  <img
    class="close-tag"
    src="Assets/NicePng_close-button-png_521935.png"
    alt=""
  />
</li>`;
}

export function launchIng() {
  dropIngredient.style.display = "block";

  let ingredients = [];
  recipes.forEach((recipes) => {
    recipes.ingredients.forEach((ingredient) => {
      if (recipeIngredient.includes(ingredient.ingredient) === false) {
        recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
        ingredients.push(ingredient.ingredient);
      }
    });
  });

  ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeIngredient}</li>
  </ul></div> `;

  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t, index) =>
    t.addEventListener("click", () =>
      displayTag(ingredients[index - 1], "ingredient")
    )
  );

  if (filterTag.includes(recipeIngredient)===true) {
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
igBtn.addEventListener("click", launchIng);

export function launchApp() {
  dropAppareil.style.display = "block";
  let appliance = [];
  recipes.forEach((recipes) => {
    if (recipeAppliance.includes(recipes.appliance) === false) {
      recipeAppliance += `<li class="filter-content">${recipes.appliance}</li>`;
      appliance.push(recipes.appliance);
    }
  });
  appFilter.innerHTML += `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeAppliance}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t, index) =>
    t.addEventListener("click", () =>
      displayTag(appliance[index - 1], "appliance")
    )
  );
}
appBtn.addEventListener("click", launchApp);

export function launchUst() {
  dropUtensil.style.display = "block";
  let ustensils = [];
  recipes.forEach((recipes) => {
    recipes.ustensils.forEach((ustensil) => {
      if (recipeUtensils.includes(ustensil) === false) {
        recipeUtensils += `<li class="filter-content">${ustensil}</li>`;
        ustensils.push(ustensil);
      }
    });
  });
  ustFilter.innerHTML += `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list_uten">
  <li class="filter-content"> ${recipeUtensils}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t, index) =>
    t.addEventListener("click", () =>
      displayTag(ustensils[index - 1], "ustensils")
    )
  );
}

utenBtn.addEventListener("click", launchUst);

export function closeBox() {
  dropIngredient.style.display = "none";
  dropAppareil.style.display = "none";
  dropUtensil.style.display = "none";
}

closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));
