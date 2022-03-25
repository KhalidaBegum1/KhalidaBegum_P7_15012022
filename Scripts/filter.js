import { recipes } from "./recipes.js";
import { sortIngTag, sortUtenTag, sortAppTag } from "./tag.js";

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
//let ingTag = document.querySelector(".ingredient-tags");
//let appTag = document.querySelector(".appliance-tags");
//let ustTag = document.querySelector(".ustensils-tags");

function displayTag(event, type) {
  let tagBox = document.querySelector(".tag-box");
  let ingTag = document.querySelector(".ingredient-tags");
  let appTag = document.querySelector(".appliance-tags");
  let ustTag = document.querySelector(".ustensils-tags");

  tagBox.style.display = "flex";
  tagBox.innerHTML += `<li class="${type}-tags">
  <input class="tag-input" type="checkbox" name="" />
  <label class="tag-label" for="${type}">${event}</label>
 <button class="tagBtn_close"> <img class="close-tag"
    src="Assets/NicePng_close-button-png_521935.png"
    alt=""
  /></button>
</li>`;

  let closeTag = document.querySelectorAll(".tagBtn_close");

  console.log(ingTag);
  console.log(tagBox);
  /*closeTag.forEach((img) =>
    img.addEventListener("click", () => {
      tagBox.style.display = "none";
      //ingTag.style.display = "none";
      //appTag.style.display = "none";
      //ustTag.style.display = "none";
    })
  );*/

  function closeTagLabel() {
    tagBox.style.display = "none";

    ingTag.style.display = "none";

    appTag.style.display = "none";

    ustTag.style.display = "none";
  }

  closeTag.forEach((l) => l.addEventListener("click", closeTagLabel));

  if (type === "ingredient") {
    sortIngTag({ target: { value: event } });
  }
  if (type === "appliance") {
    console.log(event);
    sortAppTag({ target: { value: event } });
  }
  if (type === "ustensils") {
    sortUtenTag({ target: { value: event } });
  }
}

export function launchIng() {
  dropIngredient.style.display = "block";
  let word = document.getElementById("ing-search").value;
  let ingredients = [];
  recipes.forEach((recipes) => {
    recipes.ingredients.forEach((ingredient) => {
      if (word && word !== "") {
        if (
          ingredient.ingredient.toLowerCase().includes(word.toLowerCase()) &&
          ingredients.findIndex(
            (i) => ingredient.ingredient.toLowerCase() == i.toLowerCase()
          ) < 0
        ) {
          recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
          ingredients.push(ingredient.ingredient);
          console.log(ingredient.ingredient);
        }
      } else {
        if (recipeIngredient.includes(ingredient.ingredient) === false) {
          recipeIngredient += `<li class="filter-content">${ingredient.ingredient}</li>`;
          ingredients.push(ingredient.ingredient);
        }
      }
    });
  });

  ingFilter.innerHTML += `<div class="search-text" id="ingredients-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeIngredient}</li>
  </ul></div> `;

  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      console.log(ingredients);
      console.log(t.innerText);
      const ingredientsTmp = ingredients.find((el) => t.innerText.includes(el));
      if (ingredientsTmp) {
        displayTag(ingredientsTmp, "ingredient");
      }
    })
  );
}
igBtn.addEventListener("click", launchIng);

export function launchApp() {
  dropAppareil.style.display = "block";
  let word = document.getElementById("app-search").value;
  let appliance = [];
  recipes.forEach((recipes) => {
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
  appFilter.innerHTML += `<div class="search-text" id="appareils-filter"> 
  <ul class="search-list">
  <li class="filter-content"> ${recipeAppliance}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      const applianceTmp = appliance.find((el) => t.innerText.includes(el));

      displayTag(applianceTmp, "appliance");
    })
  );
}
appBtn.addEventListener("click", launchApp);

export function launchUst() {
  dropUtensil.style.display = "block";
  let word = document.getElementById("uten-search").value;
  let ustensils = [];
  recipes.forEach((recipes) => {
    recipes.ustensils.forEach((ustensil) => {
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
  ustFilter.innerHTML += `<div class="search-text" id="utensils-filter"> 
  <ul class="search-list_uten">
  <li class="filter-content"> ${recipeUtensils}</li>
  </ul></div> `;
  let filterTag = document.querySelectorAll(".filter-content");

  filterTag.forEach((t) =>
    t.addEventListener("click", () => {
      const ustensilsTmp = ustensils.find((el) => t.innerText.includes(el));

      displayTag(ustensilsTmp, "ustensils");
    })
  );
}

utenBtn.addEventListener("click", launchUst);

export function closeBox() {
  dropIngredient.style.display = "none";
  dropAppareil.style.display = "none";
  dropUtensil.style.display = "none";
}

closeSearch.forEach((btn) => btn.addEventListener("click", closeBox));
