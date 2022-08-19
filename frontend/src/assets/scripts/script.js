// Scroll to top button
const myButton = document.getElementById("toTop");
window.onscroll = function() {scrollDown()};

function scrollDown() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Show current year
const showYear = new Date();
let year = showYear.getFullYear();
document.getElementById("year").innerHTML = year;