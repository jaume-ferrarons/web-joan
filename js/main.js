$(function () { 
    $('#fullpage').fullpage({
        navigation: true,
        menu: '#section_menu'
        // scrollOverflow: true,
    });
    $.fn.fullpage.reBuild();
}); 