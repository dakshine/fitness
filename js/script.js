$(".trainer_card")
    .mouseover(function() {
        $(this).addClass("flip")
    })
    .mouseout(function() {
        $(this).removeClass("flip")
    });
$(".toggle-menu").click(function() {
    $(this).parents("body").toggleClass("open-menu");
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 180) {
        $('body').addClass("sticky-header");
    } else {
        $('body').removeClass("sticky-header");
    }
});