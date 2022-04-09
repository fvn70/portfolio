const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
// Get the button that opens and close the modal
const openBtn1 = document.querySelector("#oBtn1");
const openBtn2 = document.querySelector("#oBtn2");
const closeBtn1 = document.querySelector("#cBtn1");
const closeBtn2 = document.querySelector("#cBtn2");

const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',() => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade .5s easy`;
        }
    });
    // Burger animation
    burger.classList.toggle('toggle');
});

openBtn1.onclick = () => {
    modal1.style.display = "block";
}

openBtn2.onclick = () => {
    modal2.style.display = "block";
}

closeBtn1.onclick = () => {
    modal1.style.display = "none";
}

closeBtn2.onclick = () => {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
    if (e.target == modal1) {
        modal1.style.display = "none";
    }
    if (e.target == modal2) {
        modal2.style.display = "none";
    }
}

