//Header
let ariaExpanded = false;
const hamburgerBtn = document.getElementById("burger-menu");
hamburgerBtn.onclick = () => {
    ariaExpanded = !ariaExpanded
    hamburgerBtn.ariaExpanded = String(ariaExpanded);
    if (ariaExpanded) {
        document.body.classList.add("menu-is-open");
    }
    else {
        document.body.classList.remove("menu-is-open");
    }
}
//header//
//hero-section//
const pointerFollower = document.getElementById("pointerFollower");
const heroSection = document.querySelector(".hero-sec")
let coordinates = { x: 0, y: 0 }
function trackMouse(e) {
    const usingClientRect = heroSection.getBoundingClientRect();
    coordinates.x = e.clientX - usingClientRect.left;
    coordinates.y = e.clientY - usingClientRect.top;
    pointerFollower.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`
}
const heroSectionObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.body.addEventListener("mousemove", trackMouse);
        pointerFollower.style.scale = 1
    }
    else {
        document.body.removeEventListener("mousemove", trackMouse)
        pointerFollower.style.scale = null
    }
})
heroSectionObs.observe(heroSection)
