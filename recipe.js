const mainContent = document.querySelector('.MainContent');

function showRecipePage(){
    mainContent.innerHTML = "Here you will see recipes"
}
function showcategories(){
    mainContent.innerHTML = "Here you will see recipes category wise distrubution"
}
function showFaviorate(){
    mainContent.innerHTML = `
    <div style="padding:12px 12px 0px 12px;"class="flex items-center justify-center w-full  h-full">
        <div style="padding:0px 12px 0px 12px"class="w-9/4 border shadow-[0px_0px_10px_rgba(0,0,0,0.3)] border-[#ddd] bg-gray-300  flex flex-col gap-2 items-center justify-start rounded-[20px_20px_0px_0px] ">
            <h1 class="w-full text-center font-bold text-lg">Favorite</h1>
            <div class="w-full grid grid-cols-2 overflow-y-auto gap-5 md:grid-cols-4">
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
                <div class="rounded-2xl shrink-0 overflow-hidden bg-white">
                    <img class="h-30 shrink-0"src="./recipeImages/aalu paratha.jpg">
                    <h1 style="padding:5px"class='font-bold items-center w-full'>Aaluparatha</h1>
                </div>
            </div>
        </div>
    </div>`
    
}