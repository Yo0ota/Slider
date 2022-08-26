var images = Array.from(document.querySelectorAll(".items img"));
var lightbox = document.querySelector(".layer");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentImageIndex = 0;


close.addEventListener("click", hideLightBox);
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);


for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", showLightBox);
}

function showLightBox(e) {
    var imageSrc = e.target.src; 
    lightbox.style.display = "flex";
    
    lightbox.firstElementChild.style.backgroundImage = "url("+ imageSrc +")"
}

function hideLightBox() {
     lightbox.style.display = "none";
}

function showNext(){
    currentImageIndex++;

    if (currentImageIndex == images.length) {
        currentImageIndex = 0 ;
    }
    lightbox.firstElementChild.style.backgroundImage = "url(" + images[currentImageIndex].src + ")";
}

function showPrev() {
    currentImageIndex--;

    if(currentImageIndex < 0)
    {
        currentImageIndex = images.length - 1;
    }

    lightbox.firstElementChild.style.backgroundImage = "url(" + images[currentImageIndex].src + ")";
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 39) {
        showNext();
    }
    else if(e.keyCode == 37){
        showPrev();
    }
    else if (e.keyCode == 27) {
        hideLightBox();
    }
})