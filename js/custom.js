$(document).ready(function() {
  var time = 7;
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
    $("#about-carousel").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
    function progressBar(elem){
      $elem = elem;
      buildProgressBar();
      start();
    }
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
    function start() {
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    };
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        if(percentTime >= 100){
          $elem.trigger('owl.next')
        }
      }
    }
    function pauseOnDragging(){
      isPause = true;
    }
    function moved(){
      clearTimeout(tick);
      start();
    }
$elem.on('mouseover',function(){
   isPause = true;
 })
$elem.on('mouseout',function(){
  isPause = false;
 })
});
$(document).ready(function () {
    $("#our-team").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 500,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: false,
		navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
    });
});
$(document).ready(function () {
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
    $("#our-services").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 500,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: false,
		navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
    });
});
$(document).ready(function () {
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
    $(".clients").owlCarousel({
        autoPlay: 8000,
        slideSpeed: 500,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        autoHeight: true,
		pagination: false,
        beforeInit: function (elem) {
            random(elem);
        }
    });
});
$(document).ready(function () {
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
    $(".quotes-p").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        autoHeight: true,
        beforeInit: function (elem) {
            random(elem);
        }
    });
});
$(document).ready(function () {
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
    $("#our-facts").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
		width:6000,
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: true,
        beforeInit: function (elem) {
            random(elem);
        }
    });
});
$(document).ready(function () {
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }
    $(".testimonials-p").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        autoHeight: true,
        beforeInit: function (elem) {
            random(elem);
        }
    });
});

/*end owl carousel */

$(document).ready(function() {
	$('.nav').onePageNav({
		filter: ':not(.external)',
		begin: function() {
		console.log('start')
		},
		end: function() {
		console.log('stop')
		}
	});

});

$(window).load(function(){
          $("#navigation").sticky({ topSpacing: 0 });
		  
        });
 $(document).ready(function ($) {
                $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        }
                    });
                });
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
            });
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function() {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);
 
	jQuery(document).ready(function($) {
	'use strict';
    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {
	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);
	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});	
 $(document).ready(function(){ 
             $(window).scroll(function(){
                 if ($(this).scrollTop() > 100) {
                     $('.scrollup').fadeIn();
                 } else {
                     $('.scrollup').fadeOut();
                 }
             }); 
             $('.scrollup').click(function(){
                 $("html, body").animate({ scrollTop: 0 }, 600);
                 return false;
             });
         });	
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
});
