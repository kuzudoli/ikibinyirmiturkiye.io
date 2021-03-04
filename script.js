

function auto_margin(){
    var content=document.querySelector(".content")
}

function hide() {
    var content = document.querySelectorAll("#content");
    content.forEach(function (contElement) {
        contElement.style.display = "none";
    });
}

function show(rakam) {
    hide();
    var content = document.querySelector(".cont"+rakam);
    content.style.display = "block";

    setTimeout(function () {
        content.style.opacity = 1;
    }, 100);
}

