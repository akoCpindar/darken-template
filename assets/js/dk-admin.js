$(function(){
    $('#sidenavToggler').on("click",function(){
        if(!$(".sidebar-offcanvas").hasClass( "minimize" )){
            $(".sidebar-offcanvas").addClass('minimize');
            $(".main-panel").addClass('expand-panel');
        } else {
            $(".sidebar-offcanvas").removeClass('minimize');
            $(".main-panel").removeClass('expand-panel');
        }
    });
    $('.sidebar-offcanvas.minimize.nav-item.collapsing').attr('class', 'collapse');
});