/**
 * Name: Theme.js
 * Date: 14/07/2014
 * @Author: Noemi Losada <info@noemilosada.com>
 */
(function($) {

    /** Smooth Scroll */
    $('.scrollTop a').each(function() {
        $(this).on("click", function(e) {
            e.preventDefault();

            var href = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(href).offset().top - 60
            }, 500);
        });
    });

    /** Collapse nav on element clicked */
    $("#main-navigation li a").on("click", function(event) {
        $(".navbar-collapse").collapse('hide');
    });

})(jQuery);
