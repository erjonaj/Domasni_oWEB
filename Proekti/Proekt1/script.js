let loggedin=0;

function popupActive(){
    document.querySelector(".popup").classList.add("active");
}

document.querySelector("#login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .signedin").addEventListener("click", function () {
    loggedin=1
    document.querySelector(".popup").classList.remove("active");
    if (loggedin===1) {
        alert("you signed in succefully")
    }
});

likedImage = (image) =>{
    if (loggedin===0) {
        popupActive();
        return;
    }
    const postElement = image.closest('.post');
    const likedParagraph = postElement.querySelectorAll('p')[0];
    
    let likedIntText = parseInt(likedParagraph.textContent);
    let imgSrc = image.src.split("/").pop();
       

    if(imgSrc === "heart.png"){
        image.src = "Interacts/redheart.png";
        likedIntText++;
    }else{
        image.src = "Interacts/heart.png";
        likedIntText--;
    }

    likedParagraph.innerHTML = likedIntText;
}

window.onload = function () {
    const images = document.querySelectorAll('.carstagram img');
    const paragraphs = document.querySelectorAll(".post p");

    paragraphs.forEach((paragraph, index) => {
        const random = Math.floor((Math.random() * 100) + 1);
        if(index % 2 == 0){
            paragraph.innerHTML = random;
        }
    })

    images.forEach((img) => {
        if (img.alt === "Like") {
          img.onclick = function(){
            likedImage(img);
          }
        }
    });
}