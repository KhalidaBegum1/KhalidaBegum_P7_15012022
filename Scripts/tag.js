import { recipes } from "./recipes.js";

let ingSearch = document.querySelector("#ing-search");
let appSearch = document.querySelector("#app-search");
let utenSearch = document.querySelector("#uten-search");

export function sortIngTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";
  console.log(event.target.value);
  console.log(recipeSection);
  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
        if (
          recipes[i].ingredients[k].ingredient
            .toLowerCase()
            .includes(tagWord.toLowerCase())
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

export function sortAppTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";
  console.log(event.target.value);
  console.log(recipeSection);
  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
        if (
          recipes[i].appliance.toLowerCase().includes(tagWord.toLowerCase())
        ) {
          ingredientFiltered.push(recipes[i].appliance);
        }
      }

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

export function sortUtenTag(event) {
  const recipeSection = document.querySelector("#recipes");
  recipeSection.innerHTML = "";
  console.log(event.target.value);
  console.log(recipeSection);
  const tagWord = event.target.value;

  if (tagWord.length >= 2) {
    for (let i = 0; i < recipes.length; i++) {
      let ingredientFiltered = [];
      for (let k = 0; k < recipes[i].ingredients.length; k++) {
        if (
          recipes[i].description
            .toLowerCase()
            .includes(tagWord.toLowerCase())
        ) {
          ingredientFiltered.push(recipes[i].description.ustensils);
        }
      }

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

let closeTag = document.querySelectorAll(".close-tag");
let tagBox = document.querySelectorAll(".tag-box");
const ingTag = document.querySelector(".ingredient-tags");
const appTag = document.querySelector(".appliance-tags");
const ustTag = document.querySelector(".ustensils-tags");

closeTag.forEach((img) =>
  img.addEventListener("click", () => {
    tagBox.style.display = "none";
  })
);

/*function fermer() {
  let tagBox = document.querySelector(".tag-box");
  tagBox.style.display = "none";
  tagBox.innerHTML = "";
  //appTag.style.display = "none";
  //ustTag.style.display = "none";
  console.log(fermer);
}*/
//closeTag.forEach((img) => img.addEventListener("change", fermer));
//ingTag.addEventListener("click", fermer);
function fermer() {
  ingTag.style.display = "none";
  appTag.style.display = "none";
  ustTag.style.display = "none";
}
console.log(fermer);
console.log(closeTag);
closeTag.forEach((img) => img.addEventListener("click", fermer));
