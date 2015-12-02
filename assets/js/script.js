
	
 	// $('#topbar').click(function(){
  //   	if ($('#topbar').hasClass('topbar-active')) {
  //     		$('body').removeClass('no-scroll');
  //     		$('#topbar').removeClass('topbar-active');
  //   	} else {
  //     		$('#topbar').addClass('topbar-active');
  //     		setTimeout(function() {
  //     		$('body').addClass('no-scroll');
  //     		}, 300);
  //   	}
  // 	});


//   

$(document).ready( function(){
        var size = $("#topbar-text").css("fontSize");
        $("#topbar-text").hover(
                function(){
                    $(this).css("fontSize", "80px");
                }, 
                function(){
                    $(this).css("fontSize", size);
                }
         );
});
