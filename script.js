

//addEventListener("scroll", () => {console.log(window.scrollY)})


const fadeBackground = () => {
    let opacityChangeElement = document.getElementById("opacityOnBackground");
    if (window.scrollY > 120) {
        console.log(opacityChangeElement.style.opacity);
        opacityChangeElement.style.opacity = 1;
    } else {
        opacityChangeElement.style.opacity = 0;
    }
}
addEventListener("scroll", fadeBackground)