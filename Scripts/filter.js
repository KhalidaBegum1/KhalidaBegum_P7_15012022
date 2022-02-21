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

const displayTags = (arrayOfObject) => {
  let fragmentTags = new DocumentFragment();
  let parentElementTags = document.getElementById("selected-tags");
  parentElementTags.replaceChildren();
  arrayOfObject.forEach((obj)=>{
  let content = createElmtAndAttributs('li', {
      'class': `tags ${obj.color}`
  });
  let inp = createElmtAndAttributs('input', {
      'class': 'tags-input',
      'type': 'checkbox',
      'name': `${obj.name}`,
      'id': `${obj.name}`
  });
  let lbl = createElmtAndAttributs('label', {
      'class': 'tags-label',
      'for': `${obj.name}`,
      'tabindex': '0'
  });
  lbl.textContent = obj.name;

  append(content, inp);
  append(content, lbl);
  append(fragmentTags, content);
})
  append(parentElementTags, fragmentTags);
}

/**
* Create Dom object for list of ingredients ustensils materiels 
* @param {Array String*} listItems 
* @param {HTML element} elmParent 
*/
 const displayItems = (listItems, elmParent) => {
  let fragmentList = new DocumentFragment();
  elmParent.replaceChildren();
  listItems.forEach((liItems) => {
      let li = createElmtAndAttributs('li', {
          'class': 'label-content__li',
          'tabindex': '0',
      });
      li.textContent = liItems;
      append(fragmentList, li);
  })
  append(elmParent, fragmentList);
}