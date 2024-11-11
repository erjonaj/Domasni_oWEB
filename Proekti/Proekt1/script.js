let loggedin=0;


// Log in popup
function popupActive(){
    document.querySelector(".popup").classList.add("active");
}

document.querySelector("#login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});



//Test Drive Popup
document.querySelector("#tdrive").addEventListener("click", function(){
    if (loggedin===0) {
        popupActive();
        return;
    }
    document.querySelector(".test").classList.add("active");
});
document.querySelector("#tdrive2").addEventListener("click", function(){
    if (loggedin===0) {
        popupActive();
        return;
    }
    document.querySelector(".test").classList.add("active");
});
document.querySelector("#tdrive3").addEventListener("click", function(){
    if (loggedin===0) {
        popupActive();
        return;
    }
    document.querySelector(".test").classList.add("active");
});

document.querySelector(".test .close-btn").addEventListener("click", function(){
    document.querySelector(".test").classList.remove("active");
});

document.querySelector(".test .submit").addEventListener("click", function(){
    document.querySelector(".test").classList.remove("active");
    alert("Succefully created a Test Drive Booking.\nYou will be contacted by our team for more details.")
});

document.querySelector(".popup .signedin").addEventListener("click", function () {
    loggedin=1
    document.querySelector(".popup").classList.remove("active");
    if (loggedin===1) {
    document.getElementById("login").innerHTML = "Signed in";
    }
});



//Survey Popup

document.querySelector("#survey").addEventListener("click", function(){
    
    document.querySelector(".survey").classList.add("active");
});

document.querySelector(".survey .close-btn").addEventListener("click", function(){
    document.querySelector(".survey").classList.remove("active");
});

document.querySelector(".survey .submit").addEventListener("click", function(){
    document.querySelector(".survey").classList.remove("active");
    alert("Thank you for completing our survey!")
});


//Likes
function likedImage(image){
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






//Comments
document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const commentInput = post.querySelector(".comment-input");
        const addCommentBtn = post.querySelector(".add-comment-btn");
        const commentsList = post.querySelector(".comments-list");
        const commentCount = post.querySelector(".commentN");

        function updateCommentCount() {
            commentCount.textContent = commentsList.children.length;
        }

        addCommentBtn.addEventListener("click", function(){
            
            if (loggedin===0) {
                popupActive();
                return;
            }
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentItem = document.createElement("li");
                commentItem.textContent = commentText;

                const deleteBtn = document.createElement("span");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-comment");
                
                deleteBtn.addEventListener("click", function() {
                    commentItem.remove();
                    updateCommentCount();
                });

                commentItem.appendChild(deleteBtn);
                commentsList.appendChild(commentItem);

                commentInput.value = "";
                updateCommentCount();
            }
        });
    });
});
