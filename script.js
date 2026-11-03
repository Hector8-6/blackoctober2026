
document.addEventListener("DOMContentLoaded", function () {

    console.log("BLACK OCTOBER 2026 carregado!");

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            console.log("Navegando para: " + link.textContent);
        });
    });

});
