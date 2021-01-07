$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    })

    $('nav').each(function () {
        $(this).css({
            'top':  $('header').height()
        })
    })
})

