$(function() {

    $('.jcarousel')
    	.jcarousel({
        // Configuration goes here
        // wrap: 'both',
	    }) 
	;

	$('.jcarousel-control-prev')
	.on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
    })
	.jcarouselControl({
        target: '-=1'    
    });

    $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
    .jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
	    .jcarouselPagination({
	        item: function(page) {
	            return '<a href="#' + page + '">' + page + '</a>';
	        }
	    })
	;

	$('select').chosen();

	$('.niceCheck').each(function() {
		var el = $(this),
			checkChecked = el.attr("checked"),
			checkDisabled = el.attr("disabled");

		if(checkChecked) {
			el.wrap("<span class='niceCheck niceChecked'></span>");
		}
		else
			el.wrap("<span class='niceCheck'></span>");

		if(checkDisabled) {
			el.parent().addClass("niceCheckDisabled");
		}

		el.parent().click(function() {
			if(el.parent().attr("class").indexOf("niceCheckDisabled")==-1) {
				if(!el.attr("checked")) {
					el.parent().addClass("niceChecked");
					el.attr("checked", true);
				} else {
					el.parent().removeClass("niceChecked");
					el.attr("checked", false);
				}
			}
		});
	});

	$( '.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(400);
            $(this).animate({
            	backgroundColor:"#03C",
            }, 300);
            $(this).children('a').animate({
            	color:"#000",
            }, 300);
        },
        function(){
            $(this).children('.submenu').slideUp(400);
            $(this).animate({
            	backgroundColor:"#DC4A4A",
            }, 300);
            $(this).children('a').animate({
            	color:"#fff",
            }, 300);
        }
    );
});