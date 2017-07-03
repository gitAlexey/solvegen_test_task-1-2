/**
 * Created by Alexey on 28.06.2017.
 */


/**
 * for sorting table Isotope
 */
;(function ($) {
    "use strict";
    $("#tabs li").click(function () {
        $("#tabs li").removeClass("sorting-menu__item--active").filter(this).addClass("sorting-menu__item--active");
        var filter_id = $(this).data("filter");
        $("#items").isotope({
            filter: filter_id,
            animationOption: {
                duration: 1000
            }
        });
    });

    /*Press the button with the active style*/
    $(document).ready(function () {
        $('.sorting-menu__item--active').click()
    })


})(jQuery);


;(function ($) {
    /*Isotope sort by data param. */
    var $table = $('#items').isotope({
        layoutMode: 'vertical',
        getSortData: {
            data: '.data',
            speak_time: '.speak_time',
            name: '.name',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });
// bind sort button click
    $('#sorts').on('click', 'p', function () {
        var sortValue = $(this).attr('data-sort-value');
        $table.isotope({sortBy: sortValue});
    });

})(jQuery);
/**
 * end sorting table Isotope
 */

/** datapicker, date format **/
;(function ($) {

    $("#datepicker_from").datepicker({dateFormat: "dd.mm"});
    $("#datepicker_to").datepicker({dateFormat: "dd.mm"});

})(jQuery);
/** end datapicker **/

/** change active style on buttons and links **/
;(function ($) {
    /* change active style style in widgets */
    $(".widgets div").click(function () {
        $(".widgets div").removeClass("widgets__item--active").filter(this).addClass("widgets__item--active");
        document.querySelector(".sorting-header__title").innerHTML = document.querySelector(".widgets__item--active").innerHTML;
    });
    /* change active link style in header menu */
    $(".ha-menu-nav a").click(function () {
        $(".ha-menu-nav a ").removeClass("ha-menu-nav__item--active").filter(this).addClass("ha-menu-nav__item--active");
    });
})(jQuery);
/** end change active style on buttons and links **/

/** Function, active navigation menu switching**/
;(function ($) {
    function CallLinkClick() {
        window.location.href = $(".footer-page-num--active a").attr('href');
    }

    $(" .footer-page .footer-page-num ").click(function () {
        $(".footer-page .footer-page-num").removeClass("footer-page-num--active").filter(this).addClass("footer-page-num--active");
    });

    $(" .footer-page .footer-page--first").click(function () {
        $(".footer-page .footer-page-num").removeClass("footer-page-num--active");
        $(".footer-page-num").filter(':first').addClass("footer-page-num--active");
        CallLinkClick()
    });

    $(" .footer-page .footer-page--back").click(function () {
        var currentPosition = $(".footer-page-num--active");
        if ($(".footer-page-num").filter(':first').hasClass("footer-page-num--active")) {
            return false;
        }
        else {
            $(".footer-page .footer-page-num").removeClass("footer-page-num--active");
            currentPosition.prev(".footer-page-num").addClass("footer-page-num--active");
            CallLinkClick()
        }
    });

    $(" .footer-page .footer-page--forward").click(function () {
        var currentPosition = $(".footer-page-num--active");
        if ($(".footer-page-num").filter(':last').hasClass("footer-page-num--active")) {
            return false;
        }
        else {
            $(".footer-page .footer-page-num").removeClass("footer-page-num--active");
            currentPosition.next(".footer-page-num").addClass("footer-page-num--active");
            CallLinkClick();
        }
    });
    $(" .footer-page .footer-page-last").click(function () {
        $(".footer-page .footer-page-num").removeClass("footer-page-num--active");
        $(".footer-page-num").filter(':last').addClass("footer-page-num--active");
        CallLinkClick()
    });

})(jQuery);
/** end function, active navigation menu switching**/

/**Add (Drag&Drop)dragging blocks and swapping places by widgets**/

;(function () {
    var FirstWidgetItemOfDrug = null;

    function dragEnterHandler(event) {
        if (this.classList.contains('all-widget')) {
            return false;
        }
        else {
            this.classList.add('underBlock-border');
        }
        event.preventDefault();
    }

    function dragStartHandler(event) {
        FirstWidgetItemOfDrug = this;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', this.innerHTML);
        event.dataTransfer.setData('style', this.classList);
    }

    function dragOverHandler(event) {
        event.preventDefault(); 
    }

    function dragLeaveHandler(event) {
        this.classList.remove('underBlock-border');
        event.preventDefault();
    }

    function dragEndHandler(event) {
        [].forEach.call(WidgetsBlock, function (WidgetItem) {
            WidgetItem.classList.remove('underBlock-border');
        });
        event.preventDefault();
    }

    function dropHandler(event) {
        if (this.classList.contains('all-widget')) {
            return false;
        }
        else if (FirstWidgetItemOfDrug != this) {
            event.dataTransfer.dropEffect = 'move';
            FirstWidgetItemOfDrug.innerHTML = this.innerHTML;
            FirstWidgetItemOfDrug.classList = this.classList;
            this.innerHTML = event.dataTransfer.getData('text/html');
            this.classList = event.dataTransfer.getData('style');
        }
        return false;
    }

    var WidgetsBlock = document.querySelectorAll('#widgets-blocks .widgets__item');
    [].forEach.call(WidgetsBlock, function (WidgetItem) {
        WidgetItem.addEventListener('dragenter', dragEnterHandler);
        WidgetItem.addEventListener('dragstart', dragStartHandler);
        WidgetItem.addEventListener('dragover', dragOverHandler);
        WidgetItem.addEventListener('dragleave', dragLeaveHandler);
        WidgetItem.addEventListener('drop', dropHandler);
        WidgetItem.addEventListener('dragend', dragEndHandler);
    });
})();
/**end (Drag&Drop)dragging blocks and swapping places by widgets**/