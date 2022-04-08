import { recipes } from "./recipes.js";
import { showError } from "./error.js";
import { sortIngTag, sortUtenTag, sortAppTag } from "./tag.js";

//retrieve DOM elements
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
const mainSearch = document.querySelector("#main-search_input");
const searchBtn = document.querySelector("#main-search_btn");
const recipeSection = document.querySelector("#recipes");
//Init variables to store state
let recipeAppliance = "";
let recipeIngredient = "";
let recipeUtensils = [];
let filteredRecipes = recipes;
let tagList = [];

recipeSection.innerHTML = "";

searchBtn.addEventListener("click", search);
mainSearch.addEventListener("change", search);

function search() {
  filteredRecipes = [];
  const word = mainSearch.value;
  let isWrong = true;
  if (word.length >= 3) {
    recipeSection.innerHTML = "";
    //research on each recipes
    for (let i = 0; i < recipes.length; i++) {
      //check if name of recipes matches with word
      if (recipes[i].name.toLowerCase().includes(word.toLowerCase())) {
        isWrong = false;

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
        filteredRecipes.push(recipes[i]);
      }
      //check if description matches with word
      else if (
        recipes[i].description.toLowerCase().includes(word.toLowerCase())
      ) {
        isWrong = false;
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
        filteredRecipes.push(recipes[i]);
      }
      //check if each ingredient matches with word
      else {
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
          isWrong = false;
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
          filteredRecipes.push(recipes[i]);
        }
      }
    }
  }
  showError(isWrong); //if conditions not matched display error message
}

//init display recipes card
recipes.forEach((recipes) => {
  let textIngredients = "";
  recipes.ingredients.forEach((ingredient) => {
    textIngredients += ` ${ingredient.ingredient}
    <span> ${ingredient.quantity}</span> 
    <span>${ingredient.unit}</span>`;
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

//function display according to the type
function displayTag(event, type) {
  let tagBox = document.querySelector(".tag-box");

  tagBox.style.display = "flex";
  //add tag to DOM
  tagBox.innerHTML += `<li class="${type}-tags" id="tagbox-${event.trim()}">
  <input class="tag-input" type="checkbox" name="" />
  <label class="tag-label" for="${type}">${event}</label>
 <button class="tagBtn_close" id="${event.trim()}"> <img class="close-tag"
    src="Assets/NicePng_close-button-png_521935.png"
    alt=""
  /></button>
</li>`;
  tagList.push({ type, event });
  //addEvent to remove tag click on close button
  let closeTag = document.querySelectorAll(".tagBtn_close");
  closeTag.forEach((el) => {
    let closeLabel = document.getElementById(`tagbox-${el.id}`);
    closeLabel.addEventListener("click", () => {
      closeLabel.style.display = "none";
      let indexOfTag = tagList.findIndex((t) => t.event === event);
      tagList.splice(indexOfTag, 1);
      tagList.forEach((t) => {
        if (t.type === "ingredient") {
          sortIngTag({ target: { value: t.event } });
        }
        if (t.type === "appliance") {
          sortAppTag({ target: { value: t.event } });
        }
        if (t.type === "ustensils") {
          sortUtenTag({ target: { value: t.event } });
        }
      });
      if (tagList.length === 0) {
        recipeSection.innerHTML = "";
        recipes.forEach((recipes) => {
          let textIngredients = "";
          recipes.ingredients.forEach((ingredient) => {
            textIngredients += ` ${ingredient.ingredient}
    <span> ${ingredient.quantity}</span> 
    <span>${ingredient.unit}</span>`;
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
      }
    });
  });

  if (type === "ingredient") {
    sortIngTag({ target: { value: event } });
  }
  if (type === "appliance") {
    sortAppTag({ target: { value: event } });
  }
  if (type === "ustensils") {
    sortUtenTag({ target: { value: event } });
  }
}

//add ingredient of filtered recipes to ingredient filtered section
function launchIng() {
  dropIngredient.style.display = "block";
  let word = document.getElementById("ing-search").value;
  let ingredients = [];
  filteredRecipes.forEach((recipes) => {
    recipes.ingredients.forEach((ingredient) => {
      //check if ingredient is filtered by search
      if (word && word !== "") {
        if (
          ingredient.ingredient.toLowerCase().includes(word.toLowerCase()) &&
          ingredients.findIndex(
            (i) => ingredient.ingredient.toLowerCase() == i.toLowerCase()
          ) < 0
        ) {
          recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
          ingredients.push(ingredient.ingredient);
        }
      } else {
        if (recipeIngredient.includes(ingredient.ingredient) === false) {
          recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
          ingredients.push(ingredient.ingredient);
        }
      }
    });
  });

  ingFilter.innerHTML = `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeIngredient}</li>
  </ul></div> `;

  let filterTag = document.querySelectorAll(".filter-content");
  //addEvent to run search on click on ingredient
  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      const ingredientsTmp = ingredients.find((el) => t.innerText.includes(el));
      if (ingredientsTmp) {
        displayTag(ingredientsTmp, "ingredient");
      }
    })
  );
}
igBtn.addEventListener("click", launchIng);

//add appliance of filtered recipes to appliance filtered section
function launchApp() {
  dropAppareil.style.display = "block";
  let word = document.getElementById("app-search").value;
  let appliance = [];
  filteredRecipes.forEach((recipes) => {
    //check if appliance is filtered by search
    if (word && word !== "") {
      if (
        recipes.appliance.toLowerCase().includes(word.toLowerCase()) &&
        appliance.findIndex(
          (i) => recipes.appliance.toLowerCase() == i.toLowerCase()
        ) < 0
      ) {
        recipeAppliance += `<li class="filter-content">${recipes.appliance}</li>`;
        appliance.push(recipes.appliance);
      }
    } else {
      if (recipeAppliance.includes(recipes.appliance) === false) {
        recipeAppliance += `<li class="filter-content">${recipes.appliance}</li>`;
        appliance.push(recipes.appliance);
      }
    }
  });
  appFilter.innerHTML = `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeAppliance}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");
  //addEvent to run search on click on appliance
  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      const applianceTmp = appliance.find((el) => t.innerText.includes(el));

      displayTag(applianceTmp, "appliance");
    })
  );
}
appBtn.addEventListener("click", launchApp);

//add ustensils of filtered recipes to ustensils filtered section
function launchUst() {
  dropUtensil.style.display = "block";
  let word = document.getElementById("uten-search").value;
  let ustensils = [];
  filteredRecipes.forEach((recipes) => {
    recipes.ustensils.forEach((ustensil) => {
      //check if ustensils is filtered by search
      if (word && word !== "") {
        if (
          ustensil.toLowerCase().includes(word.toLowerCase()) &&
          ustensils.findIndex(
            (i) => ustensil.toLowerCase() == i.toLowerCase()
          ) < 0
        ) {
          recipeUtensils += `<li class="filter-content">${ustensil}</li>`;
          ustensils.push(ustensil);
        }
      } else {
        if (recipeUtensils.includes(ustensil) === false) {
          recipeUtensils += `<li class="filter-content">${ustensil}</li>`;
          ustensils.push(ustensil);
        }
      }
    });
  });
  ustFilter.innerHTML = `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list_uten">
  <li class="filter-content"> ${recipeUtensils}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");
  //addEvent to run search on click on ustensils
  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      const ustensilsTmp = ustensils.find((el) => t.innerText.includes(el));

      displayTag(ustensilsTmp, "ustensils");
    })
  );
}

utenBtn.addEventListener("click", launchUst);

//addEvent to closeBox onclick
function closeBox() {
  dropIngredient.style.display = "none";
  dropAppareil.style.display = "none";
  dropUtensil.style.display = "none";
}

closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));
