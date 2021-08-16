$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 2000);
});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$('.navlinktoggle').click(function () {
    $(this).removeClass('show_list');
    $("#mainListDiv").removeClass("show_list");
    $(".show_list").fadeOut();
});


$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});


$(document).ready(function () {

    var back_to_top_button = ['<a href="#" class="back-to-top fixed bg_black"><i class="fa fa-sort-asc" aria-hidden="true"></i></a>'].join("");
    $("body").append(back_to_top_button)

    // Der Button wird ausgeblendet
    $(".back-to-top").hide();

    // Funktion für das Scroll-Verhalten
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
    });

});


function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.nav .main_list ul li a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.nav .main_list ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else {
            currentLink.removeClass("active");
        }
    });
}


function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;