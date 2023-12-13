let wrapper = document.querySelector(".wrapper"),
imagesContainer = document.querySelector(".images-container"),
buttons = document.querySelectorAll(".button"),
imgs = Array.from(document.querySelectorAll("img"))
bulletsContainer = document.querySelector(".bullets ul"),
carousel = document.querySelector(".carousel");



// Settings
let imageIndex = 0, 
intervalid;

function autoSlide(){
    intervalid = setInterval(() => slideImage(++imageIndex) , 1000);
}

function slideImage(){
    imageIndex = imageIndex == imgs.length ? 0 : imageIndex < 0 ? imgs.length - 1 : imageIndex;
    allLis.forEach((li) =>li.classList.remove("active"))
    allLis[imageIndex].classList.add("active");
    allLis.forEach((li) => {
        li.addEventListener("click", () => {
            clearInterval(intervalid);
            allLis.forEach((li) =>li.classList.remove("active"));
            li.classList.add("active");
            imageIndex = parseInt(li.getAttribute("data-index") - 1)
            carousel.style.transform = `translateX(${-(imageIndex * 100)}%)`;
        })
    } )
    carousel.style.transform = `translateX(${-(imageIndex * 100)}%)`;
}
autoSlide();

buttons.forEach((button) => {
    button.addEventListener("click", (e) => updateIndex(e))
})

// carousel.addEventListener("mouseover", () => clearInterval(intervalid));
// carousel.addEventListener("mouseleave", () => autoSlide());

function updateIndex (e) {
    clearInterval(intervalid);
    
    imageIndex += e.target.id == "next" ? 1 : -1;

    slideImage();
};

imgs.forEach((img, index) => {
    let li = document.createElement("li");
    li.setAttribute("data-index", index + 1)
    li.textContent = index + 1;
    bulletsContainer.appendChild(li);
})

let allLis = document.querySelectorAll("li");

allLis[0].classList.add("active");



