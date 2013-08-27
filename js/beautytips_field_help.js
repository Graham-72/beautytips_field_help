/**
 * Defines the default beautytip and adds them to the content on the page
 */
(function ($) {
  Drupal.behaviors.beautytips_field_help = {
    attach: function (context, settings) {
      var style = settings.beautytips_field_help.style;
      $('.form-item').each(function() {
        if ($(this).children('div.description').length > 0) {
          var desc = $('div.description', this).first().html();
          $(this).children('label').first().append('<img src="/misc/help.png" alt="Help" />');
          $(this).children('label').first().children('img').first().bt(desc, style);
          $('div.description', this).hide();
        }
      });
    }
  }
})(jQuery);
