/*
==========================================
                Menu
==========================================
*/
$(document).ready(function(){
    $(".fa-times").hide();
    $(".fa-bars").click(function(){
        $(".menu-list").show();
        $(".fa-times").show();
        $(".fa-bars").hide();
    })
    $(".fa-times").click(function(){
        $(".menu-list").hide();
        $(".fa-bars").show();
        $(this).hide();
    });
});






$(document).ready(function(){
    new WOW().init();
});

/*
==========================================
                Curse
==========================================
*/
$(document).ready(function(){
    $('#curse-boxes').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        smartSpeed:2000,
    });
});
$(document).ready(function(){
    $('#student-reviews').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        smartSpeed:2000,
    });
});
/*
==========================================
                Progress Number Counter
==========================================
*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
});
/*
==========================================
                Top Teachers
==========================================
*/
$(document).ready(function(){
    $('#top-teacher-boxes').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        smartSpeed:2000,
    });
});

