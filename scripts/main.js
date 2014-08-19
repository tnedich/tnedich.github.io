$(function() {
				$("#menu")
					.find("a[href!=\"#page\"]")
					.click(function() { alert("Thank you for clicking, but that's a demo link."); return false; })
					.end()
					.mmenu({
		classes		: "mm-light",
		counters	: true,
		searchfield	: false,
		header		: {
			add			: true,
			update		: true,
			title		: "Contacts"
		}
					});
			});

$(document).ready(

  $(".centerpiece").on("mouseover", function(){

      $(this).addClass('animated bounce');
  })

);





