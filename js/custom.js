AOS.init();


const showMenu = document.querySelector('.show-menu');

if(showMenu){
     showMenu.addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.add("show")
          document.querySelector('.overlay').classList.add("show")
     })


     document.querySelector('.overlay').addEventListener("click", () => {
          document.querySelector('.responsive-menu').classList.remove("show")
          document.querySelector('.overlay').classList.remove("show")
     })
}




const p = document.getElementById("myParagraph");
if(p){

  const words = p.textContent.trim().split(/\s+/);
  
  if (words.length >= 2) {
    words[1] = `<span>${words[1]}</span><br>`; // wrap the 2nd word
  }
  
  p.innerHTML = words.join(' ');

}  


// owl


 $(document).ready(function () {
    $(".owl-services").owlCarousel({
      items: 5,
      loop: true,
      stagePadding: 250,
      margin: 20,
      responsive: true,
      rtl:true,
      autoplay: false,
      autoplayTimeout: 2000,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          stagePadding: 30,
          nav : false,
          items: 1,

        },
        450: {
          items: 1,
          stagePadding: 70,
          nav : false,

        },

        600: {
          items: 2,
          stagePadding: 50,
          nav : false,

        },
         768: {
          items: 2,
          stagePadding: 120,
          nav : false,

        },
        900: {
          items: 2,
          stagePadding: 150,
          nav : false,

        },
        1024: {
          items: 3,
          stagePadding: 40,

        },
        1200: {
          items: 3.5,
          stagePadding: 50,

        },
      },
    });
  });


 $(document).ready(function () {
    $(".owl-customers").owlCarousel({
      items: 3,
      loop: true,
      // stagePadding: 250,
      margin: 10,
      responsive: true,
      rtl:true,
      autoplay: false,
      autoplayTimeout: 2000,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          // stagePadding: 10,
          nav : false,
          items: 1,

        },
        600: {
          items: 2,
          stagePadding: 0,
          nav : false,

        },
        1024: {
          items: 2,
          // stagePadding: 40,

        },
        1200: {
          items: 3,
          // stagePadding: 50,

        },
      },
    });
  });

// 

// const svgs = document.getElementsByClassName("mySVG");
// const card = document.querySelector(".customer-card");

// function updateViewBoxByCardSize() {
//   if (!svgs.length || !card) return;

//   const width = card.offsetWidth;
//   const height = card.offsetHeight;

//   // حسب التصميم
//   const viewBoxWidth = width ;
//   const viewBoxHeight = height;

//   // نطبق على كل SVG
//   Array.from(svgs).forEach(svg => {
//     svg.setAttribute("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
//   });
// }

// // عند التحميل
// updateViewBoxByCardSize();

// // عند تغيير حجم الشاشة
// window.addEventListener("resize", updateViewBoxByCardSize);

// // مراقبة تغير حجم الكارد
// const observer = new ResizeObserver(updateViewBoxByCardSize);
// observer.observe(card);
