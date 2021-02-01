"use strict";


jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

	
	$( window ).load(function() {
		
	  $("#menu-container .products").hide();
	});

	$(".main_menu a.templatemo_home").addClass('active');
	$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		document.getElementById("section6").style.display = "block";
		document.getElementById("slideshow").style.display = "block";
		document.getElementById("sp4").style.display = "block";
		document.getElementById("pop").style.display = "block";
		document.getElementById("sp5").style.display = "block";
		document.getElementById("tst").style.display = "block";



		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").click(function(){
		$("#menu-container .team").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		document.getElementById("section6").style.display = "none";
		document.getElementById("slideshow").style.display = "none";
		document.getElementById("sp4").style.display = "none";
		document.getElementById("pop").style.display = "none";
		document.getElementById("sp5").style.display = "none";
		document.getElementById("tst").style.display = "none";



		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home, .slideshow").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3, .slideshow").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").click(function(){
		$("#menu-container .services").addClass("animated fadeInDown").show();
		$(".our-services").show();
		$(this).addClass('active');
		document.getElementById("slideshow").style.display = "none";
		document.getElementById("section6").style.display = "none";
		document.getElementById("sp4").style.display = "none";
		document.getElementById("pop").style.display = "none";
		document.getElementById("sp5").style.display = "none";
		document.getElementById("tst").style.display = "none";
		
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home, .slideshow").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5, .slideshow").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").click(function(){
		$("#menu-container .contact").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		document.getElementById("section6").style.display = "none";
		document.getElementById("slideshow").style.display = "none";
		document.getElementById("sp4").style.display = "none";
		document.getElementById("pop").style.display = "block";
		document.getElementById("sp5").style.display = "none";
		document.getElementById("tst").style.display = "none";


		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home, .slideshow").removeClass('active');
		
		loadScript();
		return false;
	});



	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng( 25.60169688948181, 85.16827522448568)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}