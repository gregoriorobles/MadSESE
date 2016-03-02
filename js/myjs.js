$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.intro').css('background-position', '0 ' + x + 'px');
    }, 50);
})


jQuery(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150 ){
            $('#scrollTop').fadeIn(500);
        } else {
            $('#scrollTop').fadeOut(500);
        }
    })

    $('#scrollTop').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
});
