  const highpoints = new Set(["AZ", "GA", "TX", "NM", "KS", "MO", "KY", "TN", "VA", "NC", "SC", "FL", "AL", "LA", "AR", "MS"])

$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  if(highpoints.has(e.target.id)){
    $('#info-box').html(
      '<div>State: ' + $(this).data('state') + '</div>' +
      '<div>Highpoint: ' + $(this).data('highpoint') + '</div>' +
      '<div>Elevation: ' + $(this).data('elev') + '</div>' +
      '<div><b>Summited: ' + $(this).data('date') + '</b></div>'
    );
  } else {
    $('#info-box').html(
      '<div>State: ' + $(this).data('state') + '</div>' +
      '<div>Highpoint: ' + $(this).data('highpoint') + '</div>' +
      '<div>Elevation: ' + $(this).data('elev') + '</div>'
    );
  }

});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$("path").click(function(e){
  if(highpoints.has(e.target.id)){
    $('#img').attr("src", "images/"+ e.target.id + ".jpg")
    $('#img-blurb').html($(this).data('highpoint')+ ', ' + e.target.id);
  }
})

$(document).mousemove(function(e) {
  if(highpoints.has(e.target.id)){
    $('#info-box').css('top',e.pageY-$('#info-box').height()+115);
  } else {
    $('#info-box').css('top',e.pageY-$('#info-box').height()+87);
  }
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
