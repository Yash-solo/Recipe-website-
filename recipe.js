const mainContent = document.querySelector('.MainContent');

function showRecipePage(){
    mainContent.innerHTML = "Here you will see recipes"
}
function showcategories(){
    mainContent.innerHTML = "Here you will see recipes category wise distrubution"
}
function showFaviorate(){
    mainContent.innerHTML = `
    <label style="padding:1px 4px 1px 4px"class="w-10 shadow-[0px_0px_5px_rgba(0,0,0,0.3)] rounded-[50%] border border-gray-300 items-center justify-around inline-flex">
        <input type="checkbox" class="peer sr-only"/>
        <span class="text-4xl text-gray-300
            peer-checked:text-red-500
        ">♥</span>
    </label>`
    
}