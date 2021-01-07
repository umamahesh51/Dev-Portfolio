$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
        $('nav').css({
            'top':  $('header').height() 
        })
    })
})

