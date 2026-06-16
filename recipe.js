function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
function show_malpuaa() {
    window.location.href = "malpua_process.html"

}
function show_guliapa() {
    window.location.href = "guliapa_process.html"

}
function show_wuf() {
    window.location.href = "wuf_process.html"
}
function Show_chana() {
    window.location.href = "chana_process.html"
}
function show_quick_chana() {
    window.location.href = "quick_chana_process.html"
}
function show_pasta() {
    window.location.href = "pasta_process.html"
}
function show_recipe() {
    document.querySelector('.recipes').scrollIntoView({
        behavior: "smooth"
    })
}
function goToFooter() {
    document.getElementById('contect').scrollIntoView({
        behavior: 'smooth'
    })
}
function cheakValid() {
    let email = document.getElementById('email')
    let number = document.getElementById('number')
    if (email.value === "") {
        alert("Please Enter your email");
    } else if (number.value === "") {
        alert("Please enter your contect number");
    } else {
        alert("Your contect is saved You will recieve a email in 24 hours.")
    }
}