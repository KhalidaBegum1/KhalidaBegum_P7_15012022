const selectedTagsContainer = document.getElementById("selected-tags-list");
const secondarySearch = document.querySelectorAll(".label-input");
let ingFilter = document.querySelector("#ingredients-filter");
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
    ingFilter = recipes[i].ingredients[j];
  });
});

function closeBox() {
  dropIngredient.style.display = "none";
}
closeSearch.addEventListener("click", closeBox);

const getIngFilterTags = (ingredients) => {
  return ingredients.ingredient
    .map((ingredient) => {
      return ` <div class="search-text">
          <ul class="search-list">
            <li> ${ingredient}</li>
            
          </ul>
        </div> `;
    })
    .join("");
};

let ingFilter = document.querySelector("#ingredients-filter");

ingFilter.forEach((ingFilter) => {
    let ingredientTag = [];
    recipes.ingredients.forEach((ingredient) => {
        ingredientTag += ` ${ingredient.ingredient}
       `;
      });
      ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
      <ul class="search-list">
      <li> ${ingredientTag}</li>
      </ul></div> `;
      dropIngredient.style.display = "block";
      console.log(ingredientTag);
  });

let ingredientTag = [];
  recipes.ingredients.forEach((ingredient) => {
    ingredientTag += ` ${ingredient.ingredient}
   `;
  });