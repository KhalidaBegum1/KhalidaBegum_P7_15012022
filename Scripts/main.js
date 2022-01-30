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
        recipeSection.innerHTML +=
          '<div class="recipe-card">' + recipes[i].name + "</div>";
      }
    }
  }
}

/*for (let i = 0; i < recipes.length; i++) {
  if (recipes[i].ingredients.toLowerCase().includes(word.toLowerCase())) {
    recipeSection.innerHTML +=
      '<div class="recipe-ingredients">' +
      recipes[i].ingredients +
      "</div>";
  }
}*/

//let ingredient = recipes.ingredients;

recipes.forEach((recipes) => {
  const recipeCard = (recipeSection.innerHTML += ` 
  <div class="recipe-section" >
  <span class="title-section" ><div class="recipe-name">${recipes.name}  </div>
  <span class="recipe-time"><i class="far fa-clock"></i> ${recipes.time} min </span> </span>
  <span class="text-section"><div class="recipe-ingredient"> ${recipes.ingredients} </div>
  <div class="recipe-description">  ${recipes.description}  </div></span>
  </div>
  `);
});
/*const createElmtAndAttributs = (element, attributes) => {
  let el = document.createElement(element);
  Object.entries(attributes).forEach(([key, value]) =>
    el.setAttribute(key, value)
  );
  return el;
};
const recipeCard = (recipes) => {
 // let fragment = new DocumentFragment();

  recipes.forEach((recipes) => {
    recipeSection.innerHTML +=
      '<div class="recipe-card">' + recipes[i].name + "</div>";
    "<div>" + recipes.ingredients + "</div>";
    "<div>" + recipes.description + "</div>";

    let recipeContent = createElmtAndAttributs("div", {
      class: "card-recipe-description",
    });
    let recipeText = createElmtAndAttributs("p", {
      class: "card-recipe-text",
    });
    recipeContent.recipeText = recipes.description;
    let titleTime = createElmtAndAttributs("span", {
      class: "card-title-time",
    });
    titleTime.textContent = `${recipes.time} min`;
    for (let ing of recipes.ingredients) {
      var ingredients = createElmtAndAttributs("li", {
        class: "ingredients-list",
      });
      var ingredientsName = document.createElement("span");
      ingredientsName.textContent = `${ing.ingredient}: `;
      var ingredientsQty = document.createElement("span");
      var unit = ing.unit ? ing.unit : "";
      var qty = ing.quantity ? ing.quantity : "";
      ingredientsQty.textContent = `${qty} ${unit}`;
      append(ingredients, ingredientsName);
      append(ingredients, ingredientsQty);
      append(listIngredients, ingredients);
    }
  });
};
*/
/*const recipeCard = (recipes) => {
  let fragment = new DocumentFragment();

  recipes.forEach((recipe) => {
    let recipeCard = createElmtAndAttributs("div", {
      class: "recipe-card",
      "aria-label": "une recette de",
      tabindex: "0",
    });
    let cardHeader = createElmtAndAttributs("div", {
      class: "card-header",
    });
    let cardMain = createElmtAndAttributs("div", {
      class: "card-main",
    });
   
    
    title.textContent = recipe.name;
    let titleIcon = createElmtAndAttributs("span", {
      class: "card-title-icon",
    });
    let titleTime = createElmtAndAttributs("span", {
      class: "card-title-time",
    });
    titleTime.textContent = `${recipe.time} min`;
    let cardDescription = createElmtAndAttributs("div", {
      class: "card-description",
    });
    let listIngredients = createElmtAndAttributs("ul", {
      class: "card-description-ingredients",
      "aria-label": "Ingredients",
    });
    for (let ing of recipe.ingredients) {
      var ingredients = createElmtAndAttributs("li", {
        class: "card-describe__ingredients-list",
      });
      var ingredientsName = document.createElement("span");
      ingredientsName.textContent = `${ing.ingredient}: `;
      var ingredientsQty = document.createElement("span");
      var unit = ing.unit ? ing.unit : "";
      var qty = ing.quantity ? ing.quantity : "";
      ingredientsQty.textContent = `${qty} ${unit}`;
      append(ingredients, ingredientsName);
      append(ingredients, ingredientsQty);
      append(listIngredients, ingredients);
    }
    let recipeContent = createElmtAndAttributs("div", {
      class: "card-describe__recette overflow",
      "aria-label": "Recette",
    });
    let recipeText = createElmtAndAttributs("p", {
      class: "card-describe__recette-text",
    });
    recetteContent.textContent = recipe.description;
    append(recipeContent, recipeText);
    append(cardDescrib, listIngredients);
    append(cardDescrib, recetteContent);
    append(cardTitle, title);
    append(cardTitle, titleIcon);
    append(cardTitle, titleTime);
    append(cardMain, cardTitle);
    append(cardMain, cardDescrib);
    append(card, cardHeader);
    append(card, cardMain);
    append(fragment, card);
  });
  append(parentElement, fragment);
};*/

/*secondarySearch.forEach((input) =>
  input.addEventListener("click", openDropList)
);*/

/*for (let i = 0; i < recipes.length; i++) {
  recipeSection.innerHTML +=
    '<div class="recipe-card">' + recipes[i].name + "</div>";
}*/
