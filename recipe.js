const mainContent = document.querySelector('.MainContent');

function showRecipePage(){
    mainContent.innerHTML = "Here you will see recipes"
}
function showcategories(){
    mainContent.innerHTML = "Here you will see recipes category wise distrubution"
}
async function showFaviorate(){
    mainContent.innerHTML = `
    <div style=" padding:12px 12px 0px 12px;"class="flex items-center justify-center w-full  h-full">
        <div style=" padding:12px 12px 12px 12px"class="w-9/4 md:w-3/4 lg:w-1/2 border shadow-[0px_0px_10px_rgba(0,0,0,0.3)] border-[#ddd] flex flex-col gap-2 items-center justify-start rounded-[20px] ">
            <h1 class="w-full text-center font-bold text-lg">Favorite</h1>
            <div style="padding:12px"class="addFav w-full grid grid-cols-3 lg:grid-cols-6 overflow-y-auto gap-5 md:grid-cols-4">
                
            </div>
           
        </div>
    </div>`
    const getFav = JSON.parse(localStorage.getItem("LikedItems"));
    const response = await fetch("./file.json");
    const data = await response.json();
    
    const FavRecipes = data.map((recipe)=>{
        if(getFav.includes(String(recipe.id))){
            return recipe;
        }
    })
    FavRecipes.forEach((recipe)=>{
        if(recipe!==undefined){
            const myrec = document.createElement("div");
            myrec.addEventListener('click',()=>{
                window.location.href=onclick=`${recipe.ViewPage}?id=${recipe.id}&checked=true`
            })
            myrec.classList.add("relative","border","border-[#ddd]","cursor-pointer","rounded-2xl","shrink-0","bg-white");
            myrec.innerHTML = `
            <img class="w-full rounded-2xl object-cover h-20"src="./${recipe.RecipePic}">
            <h1 style="padding:2px"class='font-bold text-center text-[12px] w-full'>${recipe.RecipeName.length>9?recipe.RecipeName.slice(0,9)+"...":recipe.RecipeName}</h1>
            <h1 style="padding:3px 10px 3px 10px" id="${recipe.id}" class="deleteBtn absolute rounded-[50%] z-100 top-0 right-0   text-white bg-[rgba(0,0,0,0.4)]">X</h1>`

            document.querySelector(".addFav").appendChild(myrec);
        }
    })

   
}