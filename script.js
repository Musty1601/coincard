const navtoggle = document.querySelector(".nav-toggle"),
navis = document.querySelector("nav");
navtoggle.addEventListener("click", () => {
    upnavis();
})
function upnavis()
{
    navis.classList.toggle("open")
    navtoggle.classList.toggle("open")
}