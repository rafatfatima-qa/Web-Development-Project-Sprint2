// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "70px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "5px 5px";
//     document.getElementById("logo").style.fontSize = "10px";
//   } else {
//     document.getElementById("navbar").style.padding = "20px 20px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }