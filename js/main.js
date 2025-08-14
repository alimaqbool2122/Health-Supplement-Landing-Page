"use strict";


    // preloader.
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };

    $(window).on('load', function() {
        preloader(),
            wowanimation();
        mainSlider();
        counter()
    });


	// Header Animation.
	const header = document.querySelector("[data-header]");
	const back =   document.querySelector("[data-backtotop]");

	window.addEventListener( "scroll", ()=> {
		
		if ( window.scrollY > 110 ){
			header.classList.add("active");
			back.classList.add("active")
		}

		else{
			header.classList.remove("active");
			back.classList.remove("active")
		}

	});



	// For Navigation Menu.
	const hedaerbar = document.querySelector("[data-header");
	const navbtn = document.querySelector("[data-nav-toggle]");
	
	navbtn.addEventListener( "click", function() {
		header.classList.toggle("active-tab");
	});


    // isotop
    $('.gallery-active').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.gallery-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1,
            }
        });
        // filter items on button click
        $('.product-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });

    //for menu active class
    $('.product-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
	


    // counterUp
    function counter() {
        $('.count').counterUp({
            delay: 10,
            time: 2000
        });
    }



    // accordion variables
    const accordionBtn = document.querySelectorAll('[data-accordin-btn]');
const accordion = document.querySelectorAll('[data-accordin]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


    // Product-active
    $('.product-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-active-nav'
    });
    $('.product-active-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-active',
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    
    /*----- cart-plus-minus-button -----*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    // DEALS TAB


    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[content]');


    tabs.forEach((tab) => {
        tab.addEventListener( 'click', () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active');
            });

            target.classList.add('active');

            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });

            tab.classList.add('active');

        });
    });



    // For brand slider
    var swiper = new Swiper(".brandSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        
        breakpoints: {

            576: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },

            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },

          },
    
    });    


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });    



    // One Page Nav
    var top_offset = $('.main-header').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });