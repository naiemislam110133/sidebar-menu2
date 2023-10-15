let btn = document.querySelector(".menu-btn");
let sideBar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
    sideBar.classList.toggle('close');
});

let arrows = document.querySelectorAll(".arrow");
for( var i = 0; i < arrows.length ; i++){
    arrows[i].addEventListener('click', (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("show");
    });
}
