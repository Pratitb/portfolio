AOS.init({
  duration:3000,
});

VANTA.NET({
  el: "#banner",
  mouseControls: false,
  touchControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xfbaa33,
  backgroundColor: 0x0,
  spacing: 25.0,
});
//mobile menu
let mobileBtn = document.querySelector('.mobile-menu');
let mobileMenu = document.querySelector('#menu');
let firstSpan = document.querySelector('.first');
let secondSpan = document.querySelector('.second');
let thirdSpan = document.querySelector('.third');
mobileBtn.addEventListener('click', openMenu);
function openMenu(){
  if(mobileMenu.style.display == 'flex'){
    mobileMenu.style.display = 'none';
    // document.body.style.position = 'relative';
    firstSpan.classList.remove('first-cross');
    secondSpan.classList.remove('second-cross');
    thirdSpan.classList.remove('none');

  }
  else{
    mobileMenu.style.display = 'flex';
    // document.body.style.position = 'fixed';
    firstSpan.classList.add('first-cross');
    secondSpan.classList.add('second-cross');
    thirdSpan.classList.add('none');
  }
}


//open external links in new tab
$("body a[href^='https://']").attr("target", "_blank");

let topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

/*Timeline JS*/
let cards = document.querySelectorAll(".more");
let showMoreBtn = document.querySelector(".show-more");
showMoreBtn.addEventListener("click", function () {
  for (i = 0; i <= 2; i++) {
      cards[i].style.display = "block";
      showMoreBtn.style.display = 'none';
    }
});

//Mobile Menu


window.onscroll = function () {
  navBg();
};

function navBg() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("header").style.background = "black";
    document.querySelector(".top-btn").style.visibility = "visible";
  } else {
    document.getElementById("header").style.background = "transparent";
    document.querySelector(".top-btn").style.visibility = "hidden";
  }
}

$(document).ready(function () {
  $(
    ".owl-carousel, .owl-carousel0, .owl-carousel1, .owl-carousel2, .owl-carousel3, .owl-carousel4"
  ).owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
