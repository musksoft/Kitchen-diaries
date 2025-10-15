// Filter recipes based on category
function filterRecipe(value) {
  // Set active button
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Show or hide recipe cards based on the data-category attribute
  let elements = document.querySelectorAll(".recipe-card");
  elements.forEach((element) => {
    let category = element.getAttribute("data-category").toLowerCase();
    if (value == "all" || category === value.toLowerCase()) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

// Search recipes based on name
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let elements = document.querySelectorAll(".wrapper h1");
  let cards = document.querySelectorAll(".recipe-card");

  elements.forEach((element, index) => {
      let recipeName = element.innerText.toLowerCase();

      if (recipeName.includes(searchInput)) {
          cards[index].classList.remove("hide");
      } else {
          cards[index].classList.add("hide");
      }
  });
});

// Initially show all recipes
window.onload = () => {
  filterRecipe("all");
};
