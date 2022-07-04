"use strict";

    let form = document.getElementById("form");
    let memeDiv = document.querySelector(".memes");

    // add image based on src value passed to form
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "Delete";
        let buttonBox = document.createElement("div");

        let imageBox = document.createElement("div");
        let nestedImage = document.createElement("div");

        let src = document.getElementById("image").value;
        let img = document.createElement("img");
        img.src = src;

        let topTextBox = document.createElement("div");
        topTextBox.innerText = document.getElementById("toptext").value;

        let bottomTextBox = document.createElement("div");
        bottomTextBox.innerText = document.getElementById("bottomtext").value;

        imageBox.classList.add('imageBox');
        nestedImage.classList.add('nestedImage');
        topTextBox.classList.add('topText');
        bottomTextBox.classList.add('bottomText');

        memeDiv.appendChild(imageBox);
        imageBox.appendChild(nestedImage);
        nestedImage.appendChild(topTextBox);
        nestedImage.appendChild(img);
        nestedImage.appendChild(bottomTextBox);
        imageBox.appendChild(removeButton);

        form.reset();
    })

    //remove image

    memeDiv.addEventListener("click", function(event){
        event.preventDefault();
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })
    
