let sicon=document.querySelector(".nav-glass");
let sbar=document.querySelector(".search-form");
let karticon=document.querySelector(".basket-box");
let ckart=document.querySelector(".shop-cart");
let conicon=document.querySelector(".contact-box");
let logbar=document.querySelector(".log-in");
let menuicon=document.querySelector(".hambur");
let hambar=document.querySelector(".hidden-menubar");


menuicon.addEventListener("click",()=>{
    hambar.classList.toggle("active");
});

conicon.addEventListener("click",()=>{
    logbar.classList.toggle("active");
});

sicon.addEventListener("click",()=>{
    sbar.classList.toggle("active");
});

karticon.addEventListener("click",()=>{
    ckart.classList.toggle("active");
});

var swiper = new Swiper(".product-slider", {
    loor:true,
    autoplay: {
        delay:3000,
        disableOnInteraction:false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,  
        },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });