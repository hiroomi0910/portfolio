$(document).ready(function(){
    $('.is-toggle').on({
        'click' : function(){
            $(this).toggleClass('is-active');
            $(this).next('.nav-menu').toggleClass('is-active');
        }
    }); 

    $('.slider').slick({
        autoplay : true,
        arrows : false,
        centerMode : true,
        dots : true,
        fade : true,
        infinite: true
    });

    $('a[href^="#"]').click(function() {
        var speed = 500;
        var pagelink_href= $(this).attr("href");
        var pagelink_target = $(pagelink_href == "#" || pagelink_href == "" ? 'html' : pagelink_href);
        var position = pagelink_target.offset().top;
        $('html, body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
