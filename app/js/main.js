$(function(){

  //Filter Tasbs
  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if(cat === "all") {
      $("[data-category]").removeClass("hide");
    } else {
      $("[data-category]").each(function () {
        let workCat = $(this).data("category");

        if (workCat != cat) {
          $(this).addClass('hide');
        } else (
          $(this).removeClass('hide')
        )

      });
    }
  });

  //Slick Slider
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/partners/right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/partners/left.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  // Mobile Menu 
  $(".header__burger").click(function(e) {
    $(".header__burger, .menu").toggleClass("active");
  });

});