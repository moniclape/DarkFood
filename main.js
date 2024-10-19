// // Получаем элементы
// const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
// const closeBtn = document.querySelector(".close");

// // Открытие модального окна при клике на кнопку
// openModalBtn.onclick = function() {
//   modal.style.display = "block";
// }

// // Закрытие модального окна при клике на крестик
// closeBtn.onclick = function() {
//   modal.style.display = "none";
// }

// // Закрытие модального окна при клике вне его
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// 
const carousel = new bootstrap.Carousel('#myCarousel')
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}
