$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
      },
      568: {
        items: 3,
      },
    },
  });
});
