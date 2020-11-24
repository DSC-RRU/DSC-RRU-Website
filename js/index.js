function checkAndActiveAboutUs(document) {
    if (window.location.hash === '#abt-us') {
        var headerLinks = document.querySelectorAll('.header-right-link');
        headerLinks.forEach(function(x) {
            x.classList.remove("current-active");
        });
        let aboutus = document.getElementById("about-us");
        aboutus.classList.add("current-active");
    }
}

checkAndActiveAboutUs();

$(function($) {
    "use strict";
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#abt-us').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top - scrolltoOffset;
                if ($(this).attr("href") == '#abt-us') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });
    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        window.addEventListener('hashchange', checkAndActiveAboutUs)
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });
    // Stick the header at top on scroll
    // $("#header").sticky({
    //   topSpacing: 0,
    //   zIndex: '50'
    // });
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
});