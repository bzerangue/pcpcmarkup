  $('#footer').stickyfooter();


  // Orbits ...
    $(window).load(
      function() {
        $('#featuredContent').orbit({ 
          animation: 'fade', 
          captions:true, 
          pauseOnHover: true, 
          startClockOnMouseOut: true, 
          startClockOnMouseOutAfter: 1000, 
          fluid:'12x8'
        });
        
        $('#threeAcross').orbit({ 
          animation: 'horizontal-push', 
          pauseOnHover: true, 
          startClockOnMouseOut: true, 
          startClockOnMouseOutAfter: 1000, 
          fluid: '14x6'
        });
      }
    );


 $(document).ready(function() {
      
      // Main Nav Mega Dropdowns
      function addMega(){
        $(this).addClass("hovering");
        }

      function removeMega(){
        $(this).removeClass("hovering");
        }

    var megaConfig = {
         interval: 100,
         sensitivity: 10,
         over: addMega,
         timeout: 200,
         out: removeMega
    };

    $("li.mega").hoverIntent(megaConfig);

      
    });



;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);