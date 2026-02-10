const reels = [
    {
        username: "code by us",
        likecount: 100,
        isliked: true,
        commentcount: 10,
        sharecount: 5,
        savecount: 50,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "v1.mp4",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "code with gaurav",
        likecount: 200,
        isliked: true,
        commentcount: 20,
        sharecount: 10,
        savecount: 75,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "v2.mp4",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "code with sheriyansh",
        likecount: 300,
        isliked: true,
        commentcount: 30,
        sharecount: 15,
        savecount: 100,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "v3.mp4",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "code by us",
        likecount: 100,
        isliked: true,
        commentcount: 10,
        sharecount: 5,
        savecount: 50,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "https://www.pexels.com/download/video/30160936/",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "code with gaurav",
        likecount: 200,
        isliked: true,
        commentcount: 20,
        sharecount: 10,
        savecount: 75,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "https://www.pexels.com/download/video/3629511/",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "code with sheriyansh",
        likecount: '',
        isliked: true,
        commentcount: 30,
        sharecount: 15,
        savecount: 100,
        isfollowed: true,
        caption: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        video: "https://www.pexels.com/download/video/19891724/",
        userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

var sum = ''
reels.forEach(function (elem) {
    sum += `<div class="reel">
    <video autoplay loop muted playsinline src="${elem.video}"></video>
    <div class="bottom">
    <div class="user">
    <img src="${elem.userprofile}" alt="">
    <h3>${elem.username}</h3>
    <button>follow</button>
    </div>
    <p>${elem.caption}</p>
    </div>
    <div class="right">
    <div class="like"><h4 class="like-icon"><i class="ri-heart-line"></i></h4><h6>${elem.likecount}</h6></div>
    <div class="comment"><h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4><h6>${elem.commentcount}</h6></div>
    <div class="share"><h4 class="share-icon"><i class="ri-share-forward-line"></i></h4><h6>${elem.sharecount}</h6></div>
    <div class="save"><h4 class="save-icon"><i class="ri-bookmark-line"></i></h4><h6>${elem.savecount}</h6></div>
    <div class="dot"><h4 class="three-dot"><i class="ri-more-fill"></i></h4></div>
    </div>
    </div>`
})

document.querySelector('.all-reels').innerHTML = sum;

var likeIcon = document.querySelectorAll(".like-icon");

likeIcon.forEach(function (icon, index) {
    icon.addEventListener("click", function () {
        var love = icon.querySelector("i");
        if (love.classList.contains("ri-heart-line")) {
            love.classList.remove("ri-heart-line");
            love.classList.add("ri-heart-fill");
            love.style.color = "red";
            reels[index].likecount++;
        }
        else {
            love.classList.remove("ri-heart-fill");
            love.classList.add("ri-heart-line");
            love.style.color = "black";
            reels[index].likecount--;
        }
        icon.nextElementSibling.innerText = reels[index].likecount;
    })
})




var allBTN = document.querySelectorAll("button");

allBTN.forEach(function (btn) {  // 👈 "btn" clearer है
    btn.addEventListener("click", function () {
        if (btn.innerHTML == "follow") {
            btn.innerHTML = "following"
        } else {
            btn.innerHTML = "follow"
        }
    })
})

var videos = document.querySelectorAll("video");

videos.forEach(function (video) {
    video.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    })
})