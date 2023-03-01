const myInput = document.getElementById("myInput");
const showInfoBtn = document.getElementById("showInfoBtn");
const redirectToLinkBtn = document.getElementById("redirectToLinkBtn");
const infoDiv = document.getElementById("infoDiv");


function showInfo() {
    infoDiv.style.display = "block";
}


function hideInfo() {
    infoDiv.style.display = "none";
}

myInput.addEventListener("focus", showInfo);
myInput.addEventListener("blur", hideInfo);



showInfoBtn.addEventListener("click", () => {
    link = alert("Ви натиснули на першу кнопку");

});
redirectToLinkBtn.addEventListener("click", () => {
    let link = prompt("Введіть посилання:");
    if (link) {
        if (!/^https?:\/\//i.test(link)) {
            link = "http://" + link;
        }
        window.location.href = link;
    }
});



const images = [
    "../hm/img/img1.jpg",
    "../hm/img/img2.jpg",
    "../hm/img/img3.jpg",
    "../hm/img/img4.jpg",
    "../hm/img/img5.jpg",
    "../hm/img/im6.jpg",
]

const img = document.getElementById("random-img");


const randomIndex = Math.floor(Math.random() * images.length);
const randomImg = images[randomIndex];


img.src = randomImg;


