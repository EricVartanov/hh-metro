const swiper1 = new Swiper(".idc-swiper", {
    // Default parameters
    slidesPerView: 1,
    loop: false,
    direction: "horizontal",
    grabCursor: true,

    // Responsive breakpoints

    pagination: {
        el: ".idc-swiper-pagination",
        clickable: true,
        type: "bullets",
    },

    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
});

