const menu = document.getElementById('menu');
menu.addEventListener("click", function () {

    let nav = document.getElementById('nav')

    if (nav.style.display == "none") {
        nav.style.display = "flex";
        menu.style.backgroundImage = "url(https://th.bing.com/th/id/OIP.w8f8sMaOkTINNDq0W0epEQHaHa?w=512&h=512&rs=1&pid=ImgDetMain)"
    } else {
        nav.style.display = "none";
        menu.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/000/440/847/original/menu-vector-icon.jpg)"
    }
});

document.getElementById('treyarch').addEventListener("click", function () {

    window.location.href = `../treyarc/index.html`;
});

document.getElementById('bo2').addEventListener("click", function () {

    window.location.href = `../bo2main/index.html`;
});

document.getElementById('bo3').addEventListener("click", function () {

    window.location.href = `../bo3main/index.html`;
});

