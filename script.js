//contect scrolling
const contectbtn = document.querySelectorAll('#contectus');
const contectEntrBtn = document.querySelector("#checkIfValid");
contectbtn.forEach(item=>{
    item.addEventListener('click',()=>{
        document.querySelector('#contect').scrollIntoView({
            behavior:"smooth"
        })
    }) 
})

//checking contect valid or not
contectEntrBtn.addEventListener('click',()=>{
    alert("Hello world");
})