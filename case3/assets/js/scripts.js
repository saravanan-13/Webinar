
	jQuery(window).ready(function () {
		dyf();
	});

	function dyf() {
		_owl_carousel();
		_placeholder();

		// Special Actions!
		if(/(iPad|iPhone|iPod)/g.test( navigator.userAgent )) {
		}
	}
	
function _owl_carousel() {

	var total = jQuery("div.owl-carousel").length,
		count = 0;

	jQuery("div.owl-carousel").each(function() {
		var slider 		= jQuery(this);
		var options 	= slider.attr('data-plugin-options');

		// Progress Bar
		var $opt = eval('(' + options + ')');  // convert text to json
		if($opt.progressBar == 'true') {
			var afterInit = progressBar;
		} else {
			var afterInit = false;
		}

		var defaults = {
			items: 					5,
			itemsCustom: 			false,
			itemsDesktop: 			[1199,4],
			itemsDesktopSmall: 		[980,3],
			itemsTablet: 			[768,2],
			itemsTabletSmall: 		false,
			itemsMobile: 			[479,1],
			singleItem: 			true,
			itemsScaleUp: 			false,
			slideSpeed: 			200,
			paginationSpeed: 		800,
			rewindSpeed: 			1000,
			autoPlay: 				false,
			stopOnHover: 			false,
			navigation: 			false,
			navigationText: [
								'<i class="fa fa-chevron-left"></i>',
								'<i class="fa fa-chevron-right"></i>'
							],
			rewindNav: 				true,
			scrollPerPage: 			false,
			pagination: 			true,
			paginationNumbers: 		false,
			responsive: 			true,
			responsiveRefreshRate: 	200,
			responsiveBaseWidth: 	window,
			baseClass: 				"owl-carousel",
			theme: 					"owl-theme",
			lazyLoad: 				false,
			lazyFollow: 			true,
			lazyEffect: 			"fade",
			autoHeight: 			false,
			jsonPath: 				false,
			jsonSuccess: 			false,
			dragBeforeAnimFinish: 	true,
			mouseDrag: 				true,
			touchDrag: 				true,
			transitionStyle: 		false,
			addClassActive: 		false,
			beforeUpdate: 			false,
			afterUpdate: 			false,
			beforeInit: 			false,
			afterInit: 				afterInit,
			beforeMove: 			false,
			afterMove: 				(afterInit == false) ? false : moved,
			afterAction: 			false,
			startDragging: 			false,
			afterLazyLoad: 			false
		}
		var config = jQuery.extend({}, defaults, options, slider.data("plugin-options"));
		slider.owlCarousel(config).addClass("owl-carousel-init");
		
		// Progress Bar
		var elem = jQuery(this);

		//Init progressBar where elem is $("#owl-demo")
		function progressBar(elem){
		  $elem = elem;
		  //build progress bar elements
		  buildProgressBar();
		  //start counting
		  start();
		}
	 
		//create div#progressBar and div#bar then prepend to $("#owl-demo")
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
		  //reset timer
		  percentTime = 0;
		  isPause = false;
		  //run interval every 0.01 second
		  tick = setInterval(interval, 10);
		};

 
		var time = 7; // time in seconds
		function interval() {
		  if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		  }
		}
	 
		//pause while dragging 
		function pauseOnDragging(){
		  isPause = true;
		}
	 
		//moved callback
		function moved(){
		  //clear interval
		  clearTimeout(tick);
		  //start again
		  start();
		}

	});
}


/** Placeholder
 ************************************************** **/
	function _placeholder() {

		//check for IE
		if(navigator.appVersion.indexOf("MSIE")!=-1) {

			jQuery('[placeholder]').focus(function() {

				var input = jQuery(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}

			}).blur(function() {

				var input = jQuery(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
				}

			}).blur();

		}

	}



/**  Bottom Footer
 ************************************************ **/
	if(!jQuery("body").hasClass("boxed")) {

		jQuery(window).load(function() {

				function _bottomFooter() {
					jQuery("#footer").removeClass("bottom");

					var _h 	= parseInt(jQuery(document).height()),
						_wh	= parseInt(jQuery("#wrapper").height());


					if(_h > _wh) {

						jQuery("#footer").addClass("bottom");


					} else {

						jQuery("#footer").removeClass("bottom");

					}

				}	_bottomFooter();


				// On Resize
				jQuery(window).resize(function() {

					if(window.afterResize) {
						clearTimeout(window.afterResize);
					}

					window.afterResize = setTimeout(function() {

						/**
							After Resize Code
							.................
						**/	_bottomFooter();

					}, 500);

				});

		});
	}




/** Browser Detect
******************************** **/
(function($) {
	$.extend({

		browserDetect: function() {
			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function (t) {
					return ua.indexOf(t) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

			c = b.join(' ');
			h.className += ' ' + c;

			var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;

			if(isIE11) {
				jQuery('html').removeClass('gecko').addClass('ie ie11');
				return;
			}
		}
	});
})(jQuery);

(function($) {
	$.extend({});
})(jQuery);


