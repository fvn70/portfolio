let modal1 = document.querySelector("#modal1");
let modal2 = document.querySelector("#modal2");
// Get the button that opens and close the modal
let openBtn1 = document.querySelector("#oBtn1");
let openBtn2 = document.querySelector("#oBtn2");
let closeBtn1 = document.querySelector("#cBtn1");
let closeBtn2 = document.querySelector("#cBtn2");

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