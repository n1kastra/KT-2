// Темка

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});


// Корзина

let cart = 0;

const cartCount = document.getElementById("cart-count");

const buyButtons =
document.querySelectorAll(".buy-btn");

const removeButtons =
document.querySelectorAll(".remove-btn");

for(let button of buyButtons){

    button.addEventListener("click", function(){

        cart++;

        cartCount.textContent = cart;
    });

}

for(let button of removeButtons){

    button.addEventListener("click", function(){

        if(cart > 0){

            cart--;

            cartCount.textContent = cart;
        }

    });

}


// Слайдер

const slides = [

    "Лучший магазин спортивного питания!",

    "Быстрая доставка по всей стране!",

    "Качественная продукция для спортсменов!"

];

let currentSlide = 0;

const slideText =
document.getElementById("slide-text");

document.getElementById("next-btn")
.addEventListener("click", function(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    slideText.textContent =
    slides[currentSlide];

});

document.getElementById("prev-btn")
.addEventListener("click", function(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide =
        slides.length - 1;
    }

    slideText.textContent =
    slides[currentSlide];

});