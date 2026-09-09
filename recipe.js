
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
function show_malpuaa() {
    window.location.href = "otherPages/malpua_process.html"

}
function show_guliapa() {
    window.location.href = "otherPages/guliapa_process.html"

}
function show_wuf() {
    window.location.href = "otherPages/wuf_process.html"
}
function Show_chana() {
    window.location.href = "otherPages/chana_process.html"
}
function show_quick_chana() {
    window.location.href = "otherPages/quick_chana_process.html"
}
function show_pasta() {
    window.location.href = "otherPages/pasta_process.html"
}
function show_recipe() {
    document.querySelector('.recipes').scrollIntoView({
        behavior: "smooth"
    })
}

