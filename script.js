const API_KEY = "275d58779ccf4e22af03e792e8819fff"
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
    recipeListEl.innerHTML = ''
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li")
        recipeItemEl.classList.add("recipe-item");
        recipeImagesEl = document.createElement("img");
        recipeImagesEl.src = recipe.image;
        recipeImagesEl.alt = "recipe image";
        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;
        recipeIngredientsEl = document.createElement("p")
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join( ",")}`
        recipeLinkEl = document.createElement("a")
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "view reciple";




        recipeItemEl.appendChild(recipeImagesEl)
        recipeListEl.appendChild(recipeItemEl)
        recipeItemEl.appendChild(recipeTitleEl)
        recipeItemEl.appendChild(recipeIngredientsEl)
        recipeItemEl.appendChild(recipeLinkEl)


    });

}

async function getRecipes() {

    const reponse = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await reponse.json()
    return data.recipes
}




async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes)
}
init();