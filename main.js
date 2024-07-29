let btn = document.getElementById("scroll");
btn.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (scrollY > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
function color(col) {
  const root = document.documentElement;
  root.style.setProperty("--main-color", col);
  localStorage.setItem("savedColor", col); // حفظ اللون في localStorage
}

// تحميل اللون المحفوظ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  const savedColor = localStorage.getItem("savedColor");
  if (savedColor) {
    color(savedColor); // استخدام اللون المحفوظ إذا كان موجوداً
  }
});

// script.js
var typed = new Typed("#typed-text", {
  strings: ["<i>Dream Vacations</i>"],
  typeSpeed: 100,
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#text-two", {
    strings: [
      "The world is a book, and those who do not travel read only a page..",
    ],
    typeSpeed: 50,
    startDelay: 500,
  });
});
