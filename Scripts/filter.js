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
        recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
      }
    });
  });

  ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeIngredient}</li>
  </ul></div> `;
}
igBtn.addEventListener("click", launchIng);

export function launchApp() {
  dropAppareil.style.display = "block";
  recipes.forEach((recipes) => {
    if (recipeAppliance.includes(recipes.appliance) === false) {
      recipeAppliance += `<li class="filter-content">${recipes.appliance}</li>`;
    }
  });
  appFilter.innerHTML += `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeAppliance}</li>
  </ul></div> `;
}
appBtn.addEventListener("click", launchApp);

export function launchUst() {
  dropUtensil.style.display = "block";
  recipes.forEach((recipes) => {
    recipes.ustensils.forEach((ustensil) => {
      if (recipeUtensils.includes(ustensil) === false) {
        recipeUtensils += `<li class="filter-content">${ustensil}</li>`;
      }
    });
  });
  ustFilter.innerHTML += `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list_uten">
  <li class="filter-content"> ${recipeUtensils}</li>
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
let tagBox = document.querySelectorAll(".tag-box");
let ingTag = document.querySelector(".ingredient-tags");
let appTag = document.querySelector(".appliance-tags");
let ustTag = document.querySelector(".ustensils-tags");
//let chosenTag = document.querySelectorAll(".tag-input");
let filterTag = document.querySelectorAll(".filter-content");
//let tagContainer = document.querySelectorAll(".tag-container");
//let filterList = + URLSearchParams();
//document.getElementById().parentElement.appendChild();
//let filterTag = [];

/*filterTag.forEach((t) =>
  t.addEventListener("click", (e) => {
    //list = e.target.getAttribute("recipes");
    let tagContainer = document.querySelector(".tag-container");

    tagContainer.innerHTML = filterTag[list].innerHTML;
    tagBox.style.display = "block";
    console.log(test);
  })
);*/

/*filterTag.forEach((t) =>
  t.addEventListener("click", (e) => {
  filterTag = e.currentTarget
      .closest(".search-list")
      .querySelector(".tag-box");
    tagBox.style.display = "block";
  })
);*/

/*function displayTag() {
  if ((tagBox.style.display = "block"));
  {
    let tagContainer = document.querySelector(".tag-container");
    tagContainer.innerHTML = filterTag[list].innerHTML;
    tagBox.style.display = "block";
  }
}*/
//filterTag.addEventListener("click", displayTag);
//filterTag.forEach((t) => t.addEventListener("click", displayTag));
/*var tagBox = document.querySelectorAll(".tag-box");
function displayTag() {
  if (tagBox.style.display === "none") {
    tagBox.style.display = "block";
  } else {
    tagBox.style.display = "none";
  }
}*/

function displayTag() {
  tagBox.style.display = "block";
}
//filterTag.addEventListener("click", displayTag);
filterTag.forEach((t) => t.addEventListener("click", displayTag));

function fermer() {
  ingTag.style.display = "none";
  appTag.style.display = "none";
  ustTag.style.display = "none";
}

closeTag.forEach((img) => img.addEventListener("click", fermer));

const displayTags = (filterTag, recipes) => {
  let recipeSection = new Set();
  filterTag.forEach((t) => {
    switch (displayTags) {
      case "Ingredients":
        recipes.map((recipes) =>
          recipes.ingredients
            .filter((ings) => ings.ingredient.includes(t.name))
            .map(() => recipeSection.add(recipe))
        );
        break;
      case "Appliance":
        recipes
          .filter((recipes) => recipes.appliance.includes(t.name))
          .map((appl) => recipeSection.add(appl));
        break;
      case "Ustensils":
        recipes.map((recipes) =>
          recipes.ustensils
            .filter((ust) => ust.includes(t.name))
            .map(() => recipeSection.add(recipes))
        );
        break;
    }
  });
  return [...displayTags];
};
