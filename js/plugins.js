
/* ---------------------------------------- */
/*               MOBILE NAV                 */
/* ---------------------------------------- */

$(function() {
	$("<div />").appendTo("#header #mobile_nav");

	$("#header nav a").each(function() {
		var el = $(this);
		$("<a />", {
		   "href"   : el.attr("href"),
		   "text"    : el.text()
		}).appendTo("#mobile_nav div");
	});

  $("#header #mobile_nav").on("click", function() {
    $("#header #mobile_nav > div").toggle();
  })
});


/* ---------------------------------------- */
/*               STOP # JUMP                */
/* ---------------------------------------- */

(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
})();


/* ---------------------------------------- */
/*              SCROLL TO TOP               */
/* ---------------------------------------- */

$(function() {
	var offset =1000;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery("#totop").fadeIn(duration);
        } else {
            jQuery("#totop").fadeOut(duration);
        }
    });
    
    jQuery("#totop").click(function(event) {
        event.preventDefault();
        jQuery("html, body").animate({scrollTop: 0}, duration);
        return false;
    })
    
    $("a[href=#top]").click(function(){
        $("html, body").animate({scrollTop:0}, "slow");
        return false;
    });
});

/* ---------------------------------------- */
/*                   TABS                   */
/* ---------------------------------------- */

$(function() {    
	$('.tabs > ul li a:not(:first)').addClass('inactive');
	$('#tab1C').siblings().hide();
	
	$('.tabs > ul li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ 
			$('.tabs > ul li a').addClass('inactive');           
			$(this).removeClass('inactive');
			
			$('#'+ t + 'C').siblings().slideUp();
			$('#'+ t + 'C').slideDown();
		}
	});
});


/* ---------------------------------------- */
/*              VERTICAL TABS               */
/* ---------------------------------------- */

$(function() {    
	$('.vertical_tabs > ul li:first-child').addClass('active');
	$('#tab1C').siblings().hide();
	
	$('.vertical_tabs > ul li').click(function(){
		var t = $(this).attr('id');
			$('.vertical_tabs > ul li').removeClass('active');           
			$(this).addClass('active');
			
			$('#'+ t + 'C').siblings().slideUp(500);
			$('#'+ t + 'C').slideDown(500);
	});
});

/* ---------------------------------------- */
/*                ACCORDIAN                 */
/* ---------------------------------------- */

$(function() {
	$('.accordion_content').hide();
	
	$('.accordion > div a').click(function() {
		if ($(this).parent().hasClass('accordion_selected')) {
			$(this).parent().removeClass('accordion_selected');
			$(this).prev().removeClass('fa fa-minus active');
			$(this).prev().addClass('fa fa-plus');
			$(this).next().slideUp();
        } else {
        	$('.accordion_content').slideUp();
        	$('.accordion > div i').removeClass('fa fa-minus active');
        	$('.accordion > div i').addClass('fa fa-plus');
        	$('.accordion > div').removeClass('accordion_selected');
        	$(this).next().slideDown();
			$(this).parent().addClass('accordion_selected');
			$(this).prev().addClass('fa fa-minus active');
			$(this).parent().next().slideDown();
		}
		return false;
	});
});


/* ---------------------------------------- */
/*                CLOSE/HIDE                */
/* ---------------------------------------- */

$(function() {
	$('.close').click(function() {
		$(this).parent().fadeTo(500, 0.1, function() {
            $(this).slideUp(200);
        });
	});
});


/* ---------------------------------------- */
/*          PROGRESS BAR ANIMATION          */
/* ---------------------------------------- */

$('document').ready(function() {

    $('.meter > span').each(function () {
        $(this).animate({
            width: this.title
        }, {
            duration: 1000,
            step: function (current) {
                $(this).prev('h4').html(parseInt(current, 10) + '%')
            }
        });
    });
});


/* ---------------------------------------- */
/*             TESTIMONIALS SLIDER          */
/* ---------------------------------------- */

$(function() {    
	$('.testimonial_slider ul li:not(:first)').addClass('inactive');
	$('#testimonial_1C').siblings().hide();
	
	$('.testimonial_slider li').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ 
			$('.testimonial_slider ul li').addClass('inactive');           
			$(this).removeClass('inactive');
			
			$('#'+ t + 'C').siblings().slideUp();
			$('#'+ t + 'C').slideDown();
		}
	});
});

/* ---------------------------------------- */
/*              PORTFOLIO FILTER            */
/* ---------------------------------------- */

$(document).ready(function() {  
    $('div#filter a').click(function() {  
        $('div#filter a').removeClass('btn_color').addClass('white'); 
        $(this).addClass('btn_color'); 
         
        var filterVal = $(this).text().toLowerCase().replace(' ','-');  
                  
        if(filterVal == 'all') {  
            $('ul.portfolio li.hidden').fadeTo(500, 1).removeClass('hidden');  
        } else {  
            $('ul.portfolio li').each(function() {  
                if(!$(this).hasClass(filterVal)) {  
                    $(this).fadeTo(500, 0.2).addClass('hidden');  
                } else {  
                    $(this).fadeTo(500, 1).removeClass('hidden');  
                }  
            });  
        }  
          
        return false;  
    });  
});
