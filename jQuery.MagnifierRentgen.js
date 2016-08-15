$.fn.magnifierRentgen = function() {

	return this.each(function() {

		var th        = $(this),
		dataImage     = th.data("image"),
		dataImageZoom_1 = th.data("image-zoom1"),
		dataImageZoom_2 = th.data("image-zoom2"),
		dataImageZoom_3 = th.data("image-zoom3"),
		dataImageZoom_4 = th.data("image-zoom4"),
		dataImageZoom_5 = th.data("image-zoom5"),
		dataImageZoom_6 = th.data("image-zoom6"),
		dataSize      = th.data("size");
		th
		.addClass("magnifierRentgen")
		.resize(function() {
			th.find(".data-image, .magnifier-loupe img").css({
				"width" : th.width()
			})
		})
		.append("
			<img class='data-image' src='" + dataImage + "'>
			<div class='magnifier-loupe'>
				<img src='" + dataImageZoom_1 + "'>
				<img src='" + dataImageZoom_2 + "'>
				<img src='" + dataImageZoom_3 + "'>
				<img src='" + dataImageZoom_4 + "'>
				<img src='" + dataImageZoom_5 + "'>
				<img src='" + dataImageZoom_6 + "'>
			")
			.hover(function() {
				th.find(".magnifier-loupe").stop().fadeIn(0)
			}, function() {
				th.find(".magnifier-loupe").stop().fadeOut(0)
			})
			.find(".data-image").css({
				"width" : th.width()
			}).parent().find(".magnifier-loupe").css({
					"width"  : dataSize,
					"height" : dataSize
				})
				.find("img").css({
					"position" : "absolute",
					"width"    : th.width()
				});


/*слежение за курсором*/
		th.mousemove(function(e) {

			var elemPos = {},
				offset  = th.offset();

			elemPos = {
				left : e.pageX - offset.left - dataSize/2,
				top  : e.pageY - offset.top - dataSize/2
			}

			th
			.find(".magnifier-loupe").css({
					"top"  : elemPos["top"],
					"left" : elemPos["left"]
				})
				.find("img").css({
					"top"   : -elemPos["top"] - 3,
					"left"  : -elemPos["left"] - 3,
					"width" : th.width()
				})

		});


/*переключение картинок заднего плана*/
var li = $(".magnifier-loupe img");

var objs = li.map(function(){
return $(this);
}).get();

objs[0].addClass("ZetIndexMaximum");

$('.magnifier-loupe').click(function(){
for (var i = 0; i < objs.length; i++ ){
	if(objs[i].hasClass("ZetIndexMaximum")) {
		objs[i].removeClass("ZetIndexMaximum");
		if( i == objs.length-1) {
				objs[0].addClass("ZetIndexMaximum");

} else {
				i++;
				objs[i].addClass("ZetIndexMaximum");
			}
		}
	}
});


		$(window).resize(function() {
			$(".magnifierRentgen").resize();
		});

	});

};
