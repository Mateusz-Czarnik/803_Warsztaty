document.addEventListener("DOMContentLoaded", function() {

    // nav scrpit

    var navList = document.querySelectorAll(".nav_list > li");

    for (var i = 0; i < navList.length; i++) {
        navList[i].addEventListener("mouseenter", function(event) {
            if (this.children.length > 0) {
                this.children[0].style.display = "inline-block";
            }


        });

        navList[i].addEventListener("mouseout", function(event) {

            if (this.children.length > 0) {
                this.children[0].style.display = "none";
            }
        });

    };

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

    // composePictures[currentVisiblePicture].classList.add("visible");













});
