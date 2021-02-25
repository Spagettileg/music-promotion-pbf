$(document).ready(function () {

    // The Monkees performing years appear in the footer
     
    $('#performing-years').text('1966 - ' + new Date().getFullYear());
    
});

// Scroll to top of webpage...

    $("a[href='#move-up']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    // If position of vertical scroll is above 575px, for 
    // return to top button to disappear.
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 575) {
            $('.move-top').fadeIn();
        } else {
            $('.move-top').fadeOut();
        }
    });