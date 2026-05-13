const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
   menu.classList.toggle("menu-active");
});

window.onscroll = () => {
   menu.classList.remove("menu-active");
};

const btnfilter = document.querySelectorAll(".produk-box ul li");

btnfilter.forEach(data => {
   data.addEventListener("click", () => {
      // Remove active class from all buttons
      btnfilter.forEach(btn => {
         btn.classList.remove("active");
      });
      // Add active class to clicked button
      data.classList.add("active");
   });
}); 