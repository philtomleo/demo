$(document).ready(function () {

    var ani_speed = 350;
    var ani_speed_slow = 500;

    /* 卷軸平滑動畫*/
    $(window).bind("ready load scroll", function () {
        var WinWd = $(this).outerWidth();
        var WinST = $(this).scrollTop();
        var mainHeight = $("#main_visual").outerHeight();

        if (WinWd > 991.98 && WinST > mainHeight) {
            $('#game_nav_desktop').show('slide', {
                direction: "right"
            }, ani_speed);
        } else {
            $('#game_nav_desktop').hide('slide', {
                direction: "right"
            }, ani_speed);
        };

        if (WinWd <= 991.98 && WinST > mainHeight) {
            $('#game_nav_mobile').show('slide', {
                direction: "right"
            }, ani_speed);
        } else {
            $('#game_nav_mobile').hide('slide', {
                direction: "right"
            }, ani_speed);
        };

        if (WinST > 50) {
            $('#back_to_top').show('slide', {
                direction: "down"
            }, ani_speed);
        } else {
            $('#back_to_top').hide('slide', {
                direction: "down"
            }, ani_speed);
        };
    });

    /* 回到頂端 */
    $('#back_to_top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, ani_speed);
    });

    /*連結平滑轉跳*/
    $('.smooth_hash').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, ani_speed);
    });

    /* 手機導覽選單 */
    $("#menu_open").on("click", function () {
        $("#game_nav_mobile_list").toggle("slide", {
            direction: "up",
        }, ani_speed);

        $(this).toggleClass("pic_change");
        if ($(this).hasClass("pic_change")) {
            $("#menu_open").attr("src", "images/close_btn" + ".png");
        } else {
            $("#menu_open").attr("src", "images/mobile_btn" + ".png");
        };
    });

    /* owl 動畫搭配 */

    $("#features_carousel").bind('initialize.owl.carousel translate.owl.carousel drag.owl.carousel', function () {
        var owl_active = $(this).find(".owl-item.active img.anchor_item_2,.owl-item.active  img.anchor_item_3,.owl-item.active");
        var owl_not_active = $(this).find("img.anchor_item_2,img.anchor_item_3").not(owl_active);
        $(owl_not_active).hide();
    });

    $("#features_carousel").bind('initialized.owl.carousel translated.owl.carousel dragged.owl.carousel', function () {
        $(this).find(".anchor_item_2,.anchor_item_3").show('slide', {
            direction: "down"
        }, ani_speed_slow);
    });

});
