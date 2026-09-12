//recipe container which will show recipes
const recipeContainer =  document.querySelector('#recipeRecomment');

//show recipe function which fetch recipes and show on the screen 
async function showRecipes(){
    //taking response
    const response = await fetch("./file.json");
    const data = await response.json();
    //making each recipes container
    data.map((recipe)=>{
        console.log(recipe.id);
        let recipeUnit = document.createElement("div");
        recipeUnit.classList.add("w-full","max-w-250","border-[#ddd]","rounded-2xl","border","p-2","flex","items-center","justify-around","gap-2")
        recipeUnit.innerHTML = `
        <img class="h-25 shadow-[0px_5px_5px_rgba(0,0,0,0.5)] rounded-2xl w-25" src="${recipe.RecipePic}" alt="">
        <div class="flex flex-col items-center justify-around gap-1">
            <h1 class="font-semibold md:text-2xl">${recipe.RecipeName}</h1>
            <p>${recipe.RecipeMessage}</p>
        </div>
        <button onclick="window.location.href = '${recipe.ViewPage}'" class="border border-[#ddd] cursor-pointer rounded-2xl shadow-[0px_5px_5px_rgba(0,0,0,0.5)]">View recipe</button>
        `
        //append where you wants to show the recipes 
        recipeContainer.appendChild(recipeUnit);
    })
}
//show recipes onload
window.onload = function() {
    showRecipes();
};