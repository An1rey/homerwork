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


showInfoBtn.addEventListener("click", function() {
    alert("Ви натиснули на першу кнопку");
});


redirectToLinkBtn.addEventListener("click", function() {
    const link = prompt("Введіть посилання:");
    if (link) {
        if (!/^https?:\/\//i.test(link)) {
            link = "http://" + link;
        }
        window.location.href = link;
    }
});


const images = [
    "https://gen.jut.su/uploads/preview/3/0/0/11/1013_1646643738.jpg",
    "https://i.ytimg.com/vi/OAwDLwtH08s/maxresdefault.jpg",
    "http://pm1.narvii.com/6548/84392c8965a46a14ce9536d62312d62389ad2f2a_00.jpg",
    "https://digitalnomads.world/wp-content/uploads/2021/09/odessa-digital-nomads-1024x683.jpg",
];


const img = document.getElementById("random-img");


const randomIndex = Math.floor(Math.random() * images.length);
const randomImg = images[randomIndex];


img.src = randomImg;


