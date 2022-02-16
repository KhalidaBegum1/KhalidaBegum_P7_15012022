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

/*function sorted(filter, button) {
  button.addEventListener("click", () => {
   // document.querySelector("#portfolio").innerHTML = ""; 

    if (filter === "ingredient") {
      recipes.ingredient.sort((a, b) => (a.ingredient > b.ingredient ? -1 : 1)); 
    }

    if (filter === "appareil") {
      recipes.appareil.sort((a, b) => (a.appareil > b.appareil ? 1 : -1));
    }
    if (filter === "ustensils") {
     recipes.ustensils.sort((a, b) => (a.ustensils > b.ustensils ? 1 : -1)); 
    }
  })
};



sorted("ingredient", ingFilter);
sorted("appareil", appFilter);
sorted("ustensils", ustFilter);*/
const toFilterRecipesFromTags = (tags, recipes) => {
  let currentRecipesFromTags = new Set();
  tags.forEach((t) => {
    switch (t.type) {
      case "Ingredients":
        console.log(t.type);
        recipes.map((recipe) =>
          recipe.ingredients
            .filter((ings) => ings.ingredient.includes(t.name))
            .map(() => currentRecipesFromTags.add(recipe))
        );
        break;
      case "Appliance":
        recipes
          .filter((recipe) => recipe.appliance.includes(t.name))
          .map((appl) => currentRecipesFromTags.add(appl));
        break;
      case "Ustensils":
        recipes.map((recipe) =>
          recipe.ustensils
            .filter((ust) => ust.includes(t.name))
            .map((to) => currentRecipesFromTags.add(recipe))
        );
        break;
      default:
        console.log("c'est pas bon");
    }
  });
  return [...currentRecipesFromTags];
};
