var n = $("img").length;
var k = 0;
$("#img-container").imagesLoaded()
  .progress( function( instance, image ) {
  k++;
  var percent = k/n*100;
  console.log(percent);
  $("#progress-bar").css("background", "linear-gradient(to right, aqua 0%, aqua "+percent+"%, black " + percent + "%)");
}).always(function () {
  $("#splash").css("opacity", "0.0");
  setTimeout(function () {
    $("#splash").css("z-index", "-2");
  }, 600)
});