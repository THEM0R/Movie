$(function() {

  $('#company').owlCarousel({

    autoWidth: true,
    nav: true,
    navSpeed: 150,
    dragEndSpeed: 50,
    // dotsSpeed: 150,
    // autoplaySpeed: 150,
    dots: false,
    margin: 30,
    loop: false,
    items: 4,
    slideBy: 4,

    //mouseDrag: false,
    //dots: false,
    //pullDrag: false,
    //freeDrag: true,
    rewind: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 15,
      },
      // breakpoint from 576 up
      576: {
        items: 3,
        margin: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 992 up
      992: {
        items: 4
      },
    }

  });

  $('#small').owlCarousel({

    autoWidth: true,
    nav: true,
    navSpeed: 150,
    dragEndSpeed: 50,
    // dotsSpeed: 150,
    // autoplaySpeed: 150,
    dots: false,
    margin: 30,
    loop: false,
    //items: 4,
    slideBy: 4,
    mouseDrag: false,
    //dots: false,
    //pullDrag: false,
    //freeDrag: true,
    rewind: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 15,
      },
      // breakpoint from 576 up
      576: {
        items: 3,
        margin: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 992 up
      992: {
        items: 4
      },
    }

  });

  $('#big').owlCarousel({

    autoWidth: true,
    nav: true,
    margin: 30,
    loop: false,
    items: 4,
    slideBy: 3,

    dots: false, // true

    rewind: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        margin: 15,
      },
      // breakpoint from 576 up
      576: {
        items: 2,
        margin: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 2
      },
      // breakpoint from 992 up
      992: {
        items: 4
      },
    }

  });


  $('#mini-big').owlCarousel({

    autoWidth: true,
    nav: true,
    margin: 30,
    loop: false,
    dots: false,
    items: 4,
    slideBy: 5,
    rewind: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        margin: 15,
      },
      // breakpoint from 576 up
      576: {
        items: 2,
        margin: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 992 up
      992: {
        items: 4
      },
    }

  });

  $('#default,#default-2').owlCarousel({

    autoWidth: true,
    nav: true,
    dots: false,
    margin: 30,
    loop: false,
    items: 5,
    slideBy: 5,
    rewind: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 15,
      },
      // breakpoint from 576 up
      576: {
        items: 3,
        margin: 15,
      },
      // breakpoint from 768 up
      768: {
        items: 4
      },
      // breakpoint from 992 up
      992: {
        items: 5
      },
    }
  });


});