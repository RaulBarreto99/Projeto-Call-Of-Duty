const cardM = document.getElementById('multiplayer');
cardM.addEventListener("click", function () {

    let options = document.getElementsByClassName('optMult')

    if (options[0].style.visibility == "hidden") {
        options[0].style.visibility = "visible";
    } else {
        options[0].style.visibility = "hidden";
    }
});

const cardZ = document.getElementById('zombies');
cardZ.addEventListener("click", function () {

    let options = document.getElementsByClassName('optZomb')

    if (options[0].style.visibility == "hidden") {
        options[0].style.visibility = "visible";
    } else {
        options[0].style.visibility = "hidden";
    }
});

