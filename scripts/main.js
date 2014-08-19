$(function() {
				$("#menu").mmenu({
		classes		: "mm-light",
		
		counters	: true,
		searchfield	: false,
		header		: {
			add			: true,
			update		: true,
			title		: "Menu"
		},
		dragOpen: {
              open:true
            }
		
					});
			});

$(document).ready(

  $(".centerpiece").on("mouseover", function(){

      $(this).addClass('animated bounce');
  })

);





