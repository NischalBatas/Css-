$(document).ready(function(){
    $('.navbar_title_search').hide()
   $('.navbar_menu_icon3').hide()
    $('.navbar_menu_icon2').click(()=>{
        $('.navbar_title_search').show()
        $('.navbar_menu_icon2').hide()
        $('.navbar_menu_icon3').show()
     
    })

    $('.navbar_menu_icon3').click(()=>{
        $('.navbar_menu_icon2').show()
        $('.navbar_title_search').hide()
        $('.navbar_menu_icon3').hide()
    })


});
