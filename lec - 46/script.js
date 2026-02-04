var img = document.querySelector(".profile-img");
var like = document.querySelector(".like-icon");


img.addEventListener("dblclick", function () {
    like.style.opacity = "1";
    like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    setTimeout(() => {
        like.style.opacity = "0";
        like.style.transform = "translate(-50%, -100%) scale(0) rotate(0deg)";
    }, 2000);

});