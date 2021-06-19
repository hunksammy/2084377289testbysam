var delay = 1; //in milleseconds

jQuery(document).ready(function($){
  setTimeout(function(){ showNewsletterPopup(); }, delay);
  
  $('.popup-close').click(function(){
      $('.newsletter-overlays').hide();
      
      //when closed create a cookie to prevent popup to show again on refresh
      setCookie('newsletter-popups', 'poppeds', 30);
  });
});

function showNewsletterPopup(){
  if( getCookie('newsletter-popups') == ""){
     $('.newsletter-overlay').show();
     setCookie('newsletter-popups', 'poppeds', 30);
  }
  else{
    console.log("Newsletter popup blockeds.");
  }
}


function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = jQuery.trim(ca[i]);
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}