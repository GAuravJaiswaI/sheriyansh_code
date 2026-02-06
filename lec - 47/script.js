// json data is used to store and transfer data 
// it is follow a format of key value pair , array of objects
// it is written in string format
// it is written in double quotes
// it is case sensitive
// it is used in api

const users = [
    {
        fullname: "gaurav",
        image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        profession: "full stack developer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugit eveniet maiores beatae exercitationem nobis ab eligendi corrupti, odio repellat itaque, labore quasi officia! Amet a omnis eum earum sit?",
        tags: ["html", "css", "javascript", "react", "node", "express", "mongodb"],
    },
    {
        fullname: "bren",
        image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg ",
        profession: "full stack developer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fugit eveniet maiores beatae exercitationem nobis ab eligendi corrupti, odio repellat itaque, labore quasi officia! Amet a omnis eum earum sit?",
        tags: ["html", "css", "javascript", "react", "node", "express", "mongodb"],
    },
]
var sum = ''
users.forEach(function (user) {
    sum += `
  <div class="card">
    <img src="${user.image}" alt="">
    <h3>${user.fullname}</h3>
    <h4>${user.profession}</h4>
    <p>${user.description}</p>
  </div>
  `
})

var main = document.querySelector('main').innerHTML = sum