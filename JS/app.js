function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

function sliderFn() {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const images = document.querySelectorAll(".slide img");
    let currentSlide = 0;
    let interval;

    function renderSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add("show-slide");
            } else {
                slide.classList.remove("show-slide");
            }
        });
    }

    function goToNextSlide() {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        renderSlides();
    }

    function goToPreSlide() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        renderSlides();
    }

    function startAutoSlide() {
        interval = setInterval(goToNextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    next.addEventListener("click", goToNextSlide);
    prev.addEventListener("click", goToPreSlide);

    document.addEventListener("keyup", (e) => {
        if (e.code === "ArrowRight") goToNextSlide();
        if (e.code === "ArrowLeft") goToPreSlide();
    });

    images.forEach(img => {
        img.addEventListener("mouseenter", stopAutoSlide);
        img.addEventListener("mouseleave", startAutoSlide);
    });

    startAutoSlide();
}

sliderFn();