$(function() {
  var popup = $('#mainpopup');
  var time = $(".will-close strong");
  var closeSeconds = $("#mainpopup").attr("data-close");
  var openSeconds = $("#mainpopup").attr("data-open");
  var dataSrc = $("#mainpopup").attr("data-href");
  

  setTimeout(function(e) {
    
    popup.modal('show');
    time.html(closeSeconds);
    
    setInterval(function(){
      time.html(closeSeconds);
      closeSeconds--;
      
      if(closeSeconds < 0){
        popup.modal('hide');
      }
      
    }, 1000)
    
  }, openSeconds * 1000);
  
    $.ajax({
    url: dataSrc,
    dataType: "html",
    success: function(data) {
      $(".modal-body").html(data);
    }
  });
  
  
});