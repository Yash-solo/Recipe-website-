//take URL parameter 
const params = new URLSearchParams(window.location.search);
//choose id from parameter
const id = params.get('id');

//where you wants to render
const recipeHeading = document.querySelector('.RecipeNameHeader');
const recipeImage = document.querySelector('.recipeImage');
const recipeProcess = document.querySelector('.RecipeProcess');
const recipeMessage = document.querySelector('.RecipeMessage')
const recipeIngredients = document.querySelector('.RecipeIngredients');
const likecheckBox = document.querySelector(".likecheckBox");

async function getRecipes(){
    //fetch recipes when you need to show recipe
    const response = await fetch("../file.json");
    
    const data = await response.json();
    if(response.ok){
        //find the recipe user wants 
        const Recipe = data.find(item=> item.id===Number(id))
    
        //render recipe's process,ingredients,pic and name
        recipeHeading.textContent = Recipe.RecipeName;
        console.log(Recipe.RecipePic)
        recipeImage.src = `../${Recipe.RecipePic}`;
        recipeProcess.innerHTML = Recipe.RecipeMethod;
        recipeMessage.textContent = Recipe.RecipeMessage;
        recipeIngredients.innerHTML = Recipe.ingredients;
    }else{
        alert("wrong path of file.json")
    }
}
//call the funtion imidiatly
getRecipes();

//working with checkbox 
likecheckBox.addEventListener("change",(e)=>{
    if(likecheckBox.checked){
        const getPrevItem = JSON.parse(localStorage.getItem("LikedItems"))
        if(getPrevItem!==null){
            if(!getPrevItem.includes(id)){
                localStorage.setItem("LikedItems",JSON.stringify([...getPrevItem,id]))
            }
        }else{
            localStorage.setItem("LikedItems",JSON.stringify([id]))
        }
    }else{
        console.log("Jay shree ram");
    }
})