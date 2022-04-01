$(document).ready(function() {

    var scroll;
    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200) {
            $("#barra").css({"background": "rgba (0, 0, 0, 0.5)"});
        }else{
            $("#barra").css({"background": "transparent"});
        }
    });
});