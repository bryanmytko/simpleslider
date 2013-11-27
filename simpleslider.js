/*

    Simpleslider by Bryan Mytko (bryanmytko@gmail.com)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

;(function($){
  $.fn.sslider = function(s){
		var default = {
			time : 5000,
      activeclass : 'active'
		};
    var settings = $.extend({},defaults,s);
		var $curslide = 0,
		$slidecount = $('#slider>li').length,
		slider_li = $('.slider-list>li'),
		slider_nav = $('#slider_nav>ul>li'),
		timeout = null;

		$('#slider ul.slider-list>li:first-child').show();
		$('#slider_nav li:first-child a').addClass('active');

		$('#slider_nav a').click(function(){
			cur_slide = $(this).parent().index() -1;
			$('.slider-list>li').hide();
			clearTimeout(timeout);
			slide();
			return false;
		});

		function slide(){
			slider_nav.children('a').removeClass(settings.activeclass);
			if(cur_slide < $slidecount-1){
				cur_slide++;
				slider_nav.eq(cur_slide).children('a').addClass(settings.activeclass);
				slider_li.eq(cur_slide-1).hide(); 
				slider_li.eq(cur_slide).fadeIn();
			} else {
				slider_nav.eq(0).children('a').addClass(settings.activeclass);
				slider_li.eq(cur_slide).hide();
				slider_li.eq(0).fadeIn();
				cur_slide = 0
			}
			timeout = setTimeout(slide,settings.time)
		}

		timeout = setTimeout(slide,settings.time)

	});
})(jQuery);
