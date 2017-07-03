/**
 * Created by Alexey on 28.06.2017.
 */
/** change active style on buttons and links **/
;(function ($) {
    
    $("#tabs li").click(function () {
        $("#tabs li").removeClass("sorting-menu__item--active").filter(this).addClass("sorting-menu__item--active");
      })
    /* change active style style in widgets */
    $(".widgets div").click(function () {
        $(".widgets div").removeClass("widgets__item--active").filter(this).addClass("widgets__item--active");
    });
    /* change active link style in header menu */
    $(".ha-menu-nav a").click(function () {
        $(".ha-menu-nav a ").removeClass("ha-menu-nav__item--active").filter(this).addClass("ha-menu-nav__item--active");
    });
})(jQuery);
/** end change active style on buttons and links **/
