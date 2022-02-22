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

export function launchIng() {
  dropIngredient.style.display = "block";
  recipes.forEach((recipes) => {
    recipes.ingredients.forEach((ingredient) => {
      if (recipeIngredient.includes(ingredient.ingredient) === false) {
        recipeIngredient += `<li>${ingredient.ingredient}</li>`;
      }
    });
  });

  ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li> ${recipeIngredient}</li>
  </ul></div> `;
}
igBtn.addEventListener("click", launchIng);

export function launchApp() {
  dropAppareil.style.display = "block";
  recipes.forEach((recipes) => {
    if (recipeAppliance.includes(recipes.appliance) === false) {
      recipeAppliance += `<li>${recipes.appliance}</li>`;
    }
  });
  appFilter.innerHTML += `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li> ${recipeAppliance}</li>
  </ul></div> `;
}
appBtn.addEventListener("click", launchApp);

export function launchUst() {
  dropUtensil.style.display = "block";
  recipes.forEach((recipes) => {
    recipes.ustensils.forEach((ustensil) => {
      if (recipeUtensils.includes(ustensil) === false) {
        recipeUtensils += `<li>${ustensil}</li>`;
      }
    });
  });
  ustFilter.innerHTML += `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list_uten">
  <li> ${recipeUtensils}</li>
  </ul></div> `;
}
utenBtn.addEventListener("click", launchUst);

export function closeBox() {
  dropIngredient.style.display = "none";
  dropAppareil.style.display = "none";
  dropUtensil.style.display = "none";
}

closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));

let closeTag = document.querySelectorAll(".close-tag");
//let tagBox= document.querySelector(".tag-box");
let ingTag = document.querySelector(".ingredient-tags");
let appTag = document.querySelector(".appliance-tags");
let ustTag = document.querySelector(".ustensils-tags");

function fermer() {
  ingTag.style.display = "none";
  appTag.style.display = "none";
  ustTag.style.display = "none";
}

closeTag.forEach((img) => img.addEventListener("click", fermer));




