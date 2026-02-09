var allBTN = document.querySelectorAll("button");

allBTN.forEach(function (btn) {  // 👈 "btn" clearer है
    btn.addEventListener("click", function () {
        if (btn.innerHTML == "add") {
            btn.innerHTML = "remove"
        } else {
            btn.innerHTML = "add"
        }
    })
})