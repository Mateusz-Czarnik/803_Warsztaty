document.addEventListener("DOMContentLoaded", function() {


    // description divs script

    var descriptionDivs = document.querySelectorAll(".section_div")

    for (var i = 0; i < descriptionDivs.length; i++) {
        descriptionDivs[i].addEventListener("mouseenter", function(event) {

            this.firstElementChild.style.display = "none";
        });

        descriptionDivs[i].addEventListener("mouseout", function(event) {

            this.firstElementChild.style.display = "initial";
        });
    };

    // slider script

    var sliderRight = document.querySelector(".slider_right");
    var sliderLeft = document.querySelector(".slider_left");
    var allPictures = document.querySelectorAll(".main_slider ul > li");
    var currentVisiblePicture = 0;

    allPictures[currentVisiblePicture].classList.add("visible");

    sliderRight.addEventListener("click", function(event) {

        allPictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture++;

        if (currentVisiblePicture > (allPictures.length - 1)) {
            currentVisiblePicture = 0;
        }

        allPictures[currentVisiblePicture].classList.add("visible");

    });

    sliderLeft.addEventListener("click", function(event) {

        allPictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture--;

        if (currentVisiblePicture < 0) {
            currentVisiblePicture = (allPictures.length - 1);
        }

        allPictures[currentVisiblePicture].classList.add("visible");

    });

    // compose slider script

    var composePictures = document.querySelectorAll(".compose_slider ul > li");
    var chairSelect = document.querySelectorAll(".chair_select option");
    var currentVisiblePictureCompose = 2;

    composePictures[currentVisiblePictureCompose].classList.add("visible");

    var chairTypeSelect = document.querySelector(".type");
    var chairColorSelect = document.querySelector(".color");
    var chairMaterialSelect = document.querySelector(".material");
    var transportCheckbox = document.querySelector(".transport-checkbox");


    var chairTypeTable = document.querySelector(".chair-type");
    var chairColorTable = document.querySelector(".chair-color");
    var chairMaterialTable = document.querySelector(".chair-material");
    var transportTable = document.querySelector(".chair-transport");

    var chairTypePrice = document.querySelector(".chair-price");
    var chairColorPrice = document.querySelector(".color-price");
    var chairMaterialPrice = document.querySelector(".material-price");
    var transportPrice = document.querySelector(".transport-price");
    var composeShow = document.querySelector(".price-sum");


    transportCheckbox.addEventListener("click", function(event) {

        if (transportCheckbox.checked === true) {
            transportTable.innerHTML = "Transport";
            transportPrice.innerHTML = "120";
        } else {
            transportTable.innerHTML = "";
            transportPrice.innerHTML = "";
        }

    });

    chairTypeSelect.addEventListener("click", function(event) {

        if (chairTypeSelect.value == 1) {
            chairTypeTable.innerHTML = "Clair";
            chairTypePrice.innerHTML = "200";

            for (var i = 0; i < composePictures.length; i++) {
                composePictures[i].classList.remove("visible");
            }
            currentVisiblePictureCompose = 0;
            composePictures[currentVisiblePictureCompose].classList.add("visible");

        }
        if (chairTypeSelect.value == 2) {
            chairTypeTable.innerHTML = "Margarita";
            chairTypePrice.innerHTML = "300";
            for (var i = 0; i < composePictures.length; i++) {
                composePictures[i].classList.remove("visible");
            }
            currentVisiblePictureCompose = 1;
            composePictures[currentVisiblePictureCompose].classList.add("visible");
        }
        if (chairTypeSelect.value == 3) {
            chairTypeTable.innerHTML = "Selena";
            chairTypePrice.innerHTML = "250";
            for (var i = 0; i < composePictures.length; i++) {
                composePictures[i].classList.remove("visible");
            }
            currentVisiblePictureCompose = 2;
            composePictures[currentVisiblePictureCompose].classList.add("visible");

        }

    });

    chairColorSelect.addEventListener("click", function(event) {

        if (chairColorSelect.value == 1) {
            chairColorTable.innerHTML = "Czerwony";
            chairColorPrice.innerHTML = "100";
        }
        if (chairColorSelect.value == 2) {
            chairColorTable.innerHTML = "Czarny";
            chairColorPrice.innerHTML = "120";
        }
        if (chairColorSelect.value == 3) {
            chairColorTable.innerHTML = "Pomarańczowy";
            chairColorPrice.innerHTML = "80";
        }

    });

    chairMaterialSelect.addEventListener("click", function(event) {

        if (chairMaterialSelect.value == 1) {
            chairMaterialTable.innerHTML = "Tkanina";
            chairMaterialPrice.innerHTML = "50"
        }
        if (chairMaterialSelect.value == 2) {
            chairMaterialTable.innerHTML = "Skóra";
            chairMaterialPrice.innerHTML = "150"
        }
    });


});
