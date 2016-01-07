$(document).ready(function() {
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();

$(".main-footer .toggle-mnu").click(function(){
	$("html, body").animate({scrollTop: $(document).height() },"slow");
	return false;
});

$(".arrow-bottom").click(function(){
	$("html, body").animate({scrollTop: $(".main-head").height()+ 150 },"slow");
	return false;
});


	$(".section_4").waypoint(function(){

		$(".section_4 .card").each(function(index) {
			var ths=$(this);
			setInterval(function(){
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset: "10%"
	});

	$(".section_5").waypoint(function(){

		$(".section_5 .tc-item").each(function(index) {
			var ths = $(this);
			setTimeout(function(){
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index
				});
				ths.removeClass("").addClass("");
			}, 700*index);
		});
		this.destroy();
	}, {
		offset: "10%"
	});


		$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText:"",
		loop: true,
		fluidSpeed: 600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600
	});



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

$(".homesect .section-bottom .buttons").click(function(){
	$("#callback h4").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());
}).magnificPopup({
	type: "inline",
	mainClass: "mfp-forms"
});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
