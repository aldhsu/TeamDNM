$(document).ready(function () {
    var getTimeDomain = function() {
    return Sound.getTimeDomain();
  };

  var getFrequencies = function() {
    return Sound.getFrequencyDomain();
  };
  var currentAnimationId;

  function stopPrevious () {
    try{
      cancelAnimationFrame(currentAnimationId);
      $('#container').empty();
    } catch(err) {
      console.log('no id');
    }
  };

  $( "#controllsList form").hide();

  $( "#visualisers_list" ).on('change', function(){
    console.log('changing');
    if ($( "#visualisers_list option:selected" ).val() == 'lines'){ $( "#controllsList form").hide(); $('#linesSpeedControls').show([400], 'swing'); }
    if ($( "#visualisers_list option:selected" ).val() == 'sunflare'){ $( "#controllsList form").hide(); $('#sunflareControls').show(); }
    if ($( "#visualisers_list option:selected" ).val() == 'emitter'){ $( "#controllsList form").hide();}
  });
  $('#sunflareSubmit').on('click',function(){
      console.log(currentAnimationId);
      stopPrevious();
      sunFlare(getTimeDomain, getFrequencies);
    });
});

