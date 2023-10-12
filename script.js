

addEventListener("scroll", () => {console.log(window.scrollY)})


const fadeBackground = () => {
    if (window.scrollY > 120) {
        //change the background opacity to 1
        document.body.style.opacity = 1

    } else {
        document.body.classList.remove("fade-out")
    }
}
addEventListener("scroll", fadeBackground)