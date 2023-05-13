
const key = "647bebcdbba74520ba7f7e206e3224a3"
const recipeListEl = document.getElementById("recipe-list"); 
function displayRecipes(recipes){
recipeListEl.innerHTML = ""
recipes.forEach((recipe)=>{
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    recipeListEl.appendChild(recipeItemEl)

    recipeImageEl = document.createElement("img")
    recipeImageEl.src = recipe.image
    recipeImageEl.alt = "recipe image"
    recipeItemEl.appendChild(recipeImageEl)
    recipeTitle = document.createElement("h2")
    recipeTitle.innerHTML = recipe.title
    recipeItemEl.appendChild(recipeTitle)
    recipeIngredients = document.createElement("p")
    recipeIngredients.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients.map((ingredient)=> ingredient.original).join(", ")}`
    recipeItemEl.appendChild(recipeIngredients)
    recipeLinkEl = document.createElement("a")
    recipeLinkEl.innerHTML = "View Recipe"
    recipeLinkEl.herf = recipe.sourceUrl
    recipeItemEl.appendChild(recipeLinkEl)
   

})
}

async function getrecipies(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`)
    
    const data = await response.json()

    return data.recipes

}

async function init(){
    const recipes = await getrecipies()
    displayRecipes(recipes)
}

init()