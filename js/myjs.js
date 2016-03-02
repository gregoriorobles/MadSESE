$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.intro').css('background-position', '0 ' + x + 'px');
    }, 50);
})
