const p = document.getElementById("myParagraph");
const words = p.textContent.trim().split(/\s+/);

if (words.length >= 2) {
  words[1] = `<span>${words[1]}</span><br>`; // wrap the 2nd word
}

p.innerHTML = words.join(' ');



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
          stagePadding: 10,
          nav : false,
          items: 2,

        },
        600: {
          items: 2.5,
          stagePadding: 0,
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
          stagePadding: 10,
          nav : false,
          items: 2,

        },
        600: {
          items: 2.5,
          stagePadding: 0,
          nav : false,

        },
        1024: {
          items: 3,
          stagePadding: 40,

        },
        1200: {
          items: 3,
          stagePadding: 50,

        },
      },
    });
  });
