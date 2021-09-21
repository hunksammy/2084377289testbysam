//Tutorial by Eddie Kidiw
//https://www.eddiekidiw.org
$(document).ready(function(){
 $('#click').click(function(){
       
    });
  // set time out 5 sec
     setTimeout(function(){
        $('#click').trigger('click');
    }, 3000);
});