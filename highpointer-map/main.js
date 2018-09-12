  const highpoints = new Set(["AZ", "GA", "TX", "NM", "KS", "MO", "KY", "TN", "VA", "NC", "SC"])

$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$("path").click(function(e){
  if(highpoints.has(e.target.id)){
    document.getElementById("img").src = "images/"+ e.target.id + ".jpg";
  } else {
    document.getElementById("img").src = "images/comingsoon.jpg";
  }
})

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
