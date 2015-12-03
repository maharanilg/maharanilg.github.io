$(document).ready(function() {

  $("#explorelink").click(function(){
    $("#modal-container").show();
  })
  
  $("#modal-overlay").click(function(){
    $("#modal-container").hide();
  })

  $('#topbar-text').hover(function() {
      $(this).stop().animate({ fontSize : '70px' });
    },
    function() {
      $(this).stop().animate({ fontSize : '60px' });
    });

  $('#topbaralbum-text').hover(function() {
      $(this).stop().animate({ fontSize : '70px' });
    },
    function() {
      $(this).stop().animate({ fontSize : '60px' });
    });

  $(".readmore").hover(function(){
    $(this).css("background-color", "#B6B7B8");
    }, function(){
    $(this).css("background-color", "transparent");
  });

  $('#carousel-next').click(function(){
    var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marginLeft == -2880) {
      return false;
    } else {
      $('#carousel').css('margin-left','-=960');
    }
  });

  $('#carousel-prev').click(function(){
    var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marginLeft == 0) {
      return false;
    } else {
      $('#carousel').css('margin-left', '+=960');
    }
  });

$(function(){
  var prev;    

  $('.albuminfo').hover(function(){
  prev = $(this).text();
      $(this).text("Fun Day!");
  }, function(){
      $(this).text(prev)
  });
})


});