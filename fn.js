const searchBox = document.querySelector('.RecipeSearch');

import { recipeContainer } from "./script.js";

searchBox.addEventListener('keypress',async(e)=>{
    if(e.key === "Enter"){
        const response = await fetch("file.json");
        const data = await response.json();
        const updateList = data.filter((recipe)=>{
            return recipe.RecipeName === searchBox.value;
        })
        recipeContainer.innerHTML = "";
        if(updateList.length ===0){
            recipeContainer.innerHTML = "Not Found";
        }else{
            updateList.map((recipe)=>{
                //create element 
                let recipeUnit = document.createElement("div");
                //set karo html
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
    }
})