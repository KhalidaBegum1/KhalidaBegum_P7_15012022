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
      }
    }
  }
}

let i = 0;
recipes.length;
i++;
let j = 0;
recipes[i].ingredients.length;
j++;
let ingredient = recipes[i].ingredients[j];

recipes.forEach((recipes) => {
  recipeSection.innerHTML += ` 
  <div class="recipe-section" >
  <span class="title-section" ><div class="recipe-name">${recipes.name}  </div>
  <span class="recipe-time"><i class="far fa-clock"></i> ${recipes.time} min </span> </span>
  <span class="text-section"><div class="recipe-ingredient">  ${ingredient.ingredient}
  <span> ${ingredient.quantity}</span> 
  <span>${ingredient.unit}</span> </div>
  <div class="recipe-description">  ${recipes.description}  </div></span>
  </div>
  `;
});

const dropSearch = document.querySelectorAll(".label-btn");
const dropBg = document.querySelectorAll(".secondary-search_label");
dropSearch.forEach((btn) =>
  btn.addEventListener("click", () => {
    dropBg.style.display = "block";
    console.log("test");
  })
);
