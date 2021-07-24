$(document).ready(function(e){
  
  // if you changed the usual .preloader class in html, change here too
  var preloader = $(".preloader");
  
  $(window).load(function() {
    // do something when whole page is done loading
    // remove the timeout when youre copying this in your website
    
 
  
  function showPage() {
    // hides the preloader with a nice transition (css opacity)
    // see line 85 in css
    preloader.fadeOut("slow");
  }
  
  /* ################## */
  /* ################## */
  /* ################## */
  /* NO IMPORTANT STUFF */
  /* ################## */
  /* ################## */
  /* ################## */
  
  var again = $("h3");
  
  again.stop().click(function(e){
    location.reload(true);
  });
});