$(document).ready(function(){
    // $('.navbar_title_search').hide()
    
//    $('.navbar_menu_icon2').hide()
//     $('.navbar_menu_icon2').click(()=>{
//         $('.navbar_title_search').show()
//         $('.navbar_menu_icon2').hide()
//         $('.navbar_menu_icon3').show()
     
//     })

//     $('.navbar_menu_icon3').click(()=>{
//         $('.navbar_menu_icon2').show()
//         $('.navbar_title_search').hide()
//         $('.navbar_menu_icon3').hide()
//     })

//     $('.navbar_menu_icon').hide()
//     $('.navbar_menu_icon4').click(()=>{
//         $('.navbar_list').hide(1000)
//         $('.navbar_menu_icon4').hide()
//         $('.navbar_menu_icon').show()
//     })

//     $('.navbar_menu_icon').click(()=>{
//         $('.navbar_list').show(1000)
//         $('.navbar_menu_icon4').show()
//         $('.navbar_menu_icon').hide()
//     })

    $('.navbar_menu_icon3').hide()
    $('.navbar_menu_icon4').hide()

    $('.navbar_menu_icon2').click(()=>{
        $('.navbar_title_search').addClass('searchfield')
        $('.navbar_menu_icon2').hide()
        $('.navbar_menu_icon3').show()
    })

    $('.navbar_menu_icon3').click(()=>{
        $('.navbar_title_search').removeClass('searchfield')
        $('.navbar_menu_icon2').show()
        $('.navbar_menu_icon3').hide()
    })
    
    $('.navbar_menu_icon').click(()=>{
        $('.navbar_list').addClass('itemslists')
        $('.navbar_menu_icon4').show()
        $('.navbar_menu_icon').hide()

    })

    $('.navbar_menu_icon4').click(()=>{
        $('.navbar_list').removeClass('itemslists')
        $('.navbar_menu_icon4').hide()
        $('.navbar_menu_icon').show()

    })

});


