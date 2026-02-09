var elem = document.querySelectorAll(".elem");
var allBTN = document.querySelectorAll("button");

allBTN.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.innerHTML == "add") {
            elem.innerHTML = "remove"
        } else {
            elem.innerHTML = "add"
        }
    })

})