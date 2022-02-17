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

export function launchIng() {
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

export function launchApp() {
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

export function launchUst() {
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

export function closeBox() {
  displaySearch.style.display = "none";
}
closeSearch.addEventListener("click", closeBox);
//closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));

/*closeSearch.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropSearch.style.display = "none";
  });
});*/
function toUniqueArray(a){
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
      if (newArr.indexOf(a[i]) === -1) {
          newArr.push(a[i]);
      }
  }
return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique = toUniqueArray(colors); // ["red","green"]