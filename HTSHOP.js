var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});


$("#formLocCUST").submit(function(e){
  e.preventDefault();
  var x = {
    name001:$('#nameLocCUST').val(),
    desc001:$('#descLocCUST').val(),


	
  }; 






  locRef.push(x);
});










$("#formLoc").submit(function(e){
  e.preventDefault();
  var x = {
    desc:$('#nameLoc').val(),
    name:$('#descLoc').val(),


	
  }; 






  locRef.push(x);
});




$("#formLoc1").submit(function(e){
  e.preventDefault();
  var x = {
    desc1:$('#nameLoc1').val(),
    name1:$('#descLoc1').val(),



  }; 






  locRef.push(x);
});














$("#formLoc2").submit(function(e){
  e.preventDefault();
  var x = {
    desc2:$('#nameLoc2').val(),
    name2:$('#descLoc2').val(),


	
  }; 






  locRef.push(x);
});



$("#formLoc3").submit(function(e){
  e.preventDefault();
  var x = {
    desc3:$('#nameLoc3').val(),
    name3:$('#descLoc3').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc4").submit(function(e){
  e.preventDefault();
  var x = {
    desc4:$('#nameLoc4').val(),
    name4:$('#descLoc4').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc5").submit(function(e){
  e.preventDefault();
  var x = {
    desc5:$('#nameLoc5').val(),
    name5:$('#descLoc5').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc6").submit(function(e){
  e.preventDefault();
  var x = {
    desc6:$('#nameLoc6').val(),
    name6:$('#descLoc6').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc7").submit(function(e){
  e.preventDefault();
  var x = {
    desc7:$('#nameLoc7').val(),
    name7:$('#descLoc7').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc8").submit(function(e){
  e.preventDefault();
  var x = {
    desc8:$('#nameLoc8').val(),
    name8:$('#descLoc8').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc9").submit(function(e){
  e.preventDefault();
  var x = {
    desc9:$('#nameLoc9').val(),
    name9:$('#descLoc9').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc10").submit(function(e){
  e.preventDefault();
  var x = {
    desc10:$('#nameLoc10').val(),
    name10:$('#descLoc10').val(),


	
  }; 






  locRef.push(x);
});


$("#formLoc11").submit(function(e){
  e.preventDefault();
  var x = {
    desc11:$('#nameLoc11').val(),
    name11:$('#descLoc11').val(),



  }; 






  locRef.push(x);
});


$("#formLoc12").submit(function(e){
  e.preventDefault();
  var x = {
    desc12:$('#nameLoc12').val(),
    name12:$('#descLoc12').val(),



  }; 






  locRef.push(x);
});


$("#formLoc13").submit(function(e){
  e.preventDefault();
  var x = {
    desc13:$('#nameLoc13').val(),
    name13:$('#descLoc13').val(),



  }; 






  locRef.push(x);
});


$("#formLoc14").submit(function(e){
  e.preventDefault();
  var x = {
    desc14:$('#nameLoc14').val(),
    name14:$('#descLoc14').val(),



  }; 






  locRef.push(x);
});


$("#formLoc15").submit(function(e){
  e.preventDefault();
  var x = {
    desc15:$('#nameLoc15').val(),
    name15:$('#descLoc15').val(),



  }; 






  locRef.push(x);
});


$("#formLoc16").submit(function(e){
  e.preventDefault();
  var x = {
    desc16:$('#nameLoc16').val(),
    name16:$('#descLoc16').val(),



  }; 






  locRef.push(x);
});

$("#formLoc17").submit(function(e){
  e.preventDefault();
  var x = {
    desc17:$('#nameLoc17').val(),
    name17:$('#descLoc17').val(),



  }; 






  locRef.push(x);
});


$("#formLoc18").submit(function(e){
  e.preventDefault();
  var x = {
    desc18:$('#nameLoc18').val(),
    name18:$('#descLoc18').val(),



  }; 






  locRef.push(x);
});


$("#formLoc19").submit(function(e){
  e.preventDefault();
  var x = {
    desc19:$('#nameLoc19').val(),
    name19:$('#descLoc19').val(),



  }; 






  locRef.push(x);
});


$("#formLoc20").submit(function(e){
  e.preventDefault();
  var x = {
    desc20:$('#nameLoc20').val(),
    name20:$('#descLoc20').val(),



  }; 






  locRef.push(x);
});



$("#formLoc21").submit(function(e){
  e.preventDefault();
  var x = {
    desc21:$('#nameLoc21').val(),
    name21:$('#descLoc21').val(),



  }; 






  locRef.push(x);
});


$("#formLoc22").submit(function(e){
  e.preventDefault();
  var x = {
    desc22:$('#nameLoc22').val(),
    name22:$('#descLoc22').val(),



  }; 






  locRef.push(x);
});


$("#formLoc23").submit(function(e){
  e.preventDefault();
  var x = {
    desc23:$('#nameLoc23').val(),
    name23:$('#descLoc23').val(),



  }; 






  locRef.push(x);
});


$("#formLoc24").submit(function(e){
  e.preventDefault();
  var x = {
    desc24:$('#nameLoc24').val(),
    name24:$('#descLoc24').val(),



  }; 






  locRef.push(x);
});


$("#formLoc25").submit(function(e){
  e.preventDefault();
  var x = {
    desc25:$('#nameLoc25').val(),
    name25:$('#descLoc25').val(),



  }; 






  locRef.push(x);
});


$("#formLoc26").submit(function(e){
  e.preventDefault();
  var x = {
    desc26:$('#nameLoc26').val(),
    name26:$('#descLoc26').val(),



  }; 






  locRef.push(x);
});


$("#formLoc27").submit(function(e){
  e.preventDefault();
  var x = {
    desc27:$('#nameLoc27').val(),
    name27:$('#descLoc27').val(),



  }; 






  locRef.push(x);
});


$("#formLoc28").submit(function(e){
  e.preventDefault();
  var x = {
    desc28:$('#nameLoc28').val(),
    name28:$('#descLoc28').val(),



  }; 






  locRef.push(x);
});


$("#formLoc29").submit(function(e){
  e.preventDefault();
  var x = {
    desc29:$('#nameLoc29').val(),
    name29:$('#descLoc29').val(),



  }; 






  locRef.push(x);
});


$("#formLoc30").submit(function(e){
  e.preventDefault();
  var x = {
    desc30:$('#nameLoc30').val(),
    name30:$('#descLoc30').val(),



  }; 






  locRef.push(x);
});

$("#formLoc31").submit(function(e){
  e.preventDefault();
  var x = {
    desc31:$('#nameLoc31').val(),
    name31:$('#descLoc31').val(),



  }; 






  locRef.push(x);
});


$("#formLoc32").submit(function(e){
  e.preventDefault();
  var x = {
    desc32:$('#nameLoc32').val(),
    name32:$('#descLoc32').val(),



  }; 






  locRef.push(x);
});


$("#formLoc33").submit(function(e){
  e.preventDefault();
  var x = {
    desc33:$('#nameLoc33').val(),
    name33:$('#descLoc33').val(),



  }; 






  locRef.push(x);
});


$("#formLoc34").submit(function(e){
  e.preventDefault();
  var x = {
    desc34:$('#nameLoc34').val(),
    name34:$('#descLoc34').val(),



  }; 






  locRef.push(x);
});


$("#formLoc35").submit(function(e){
  e.preventDefault();
  var x = {
    desc35:$('#nameLoc35').val(),
    name35:$('#descLoc35').val(),



  }; 






  locRef.push(x);
});


$("#formLoc36").submit(function(e){
  e.preventDefault();
  var x = {
    desc36:$('#nameLoc36').val(),
    name36:$('#descLoc36').val(),



  }; 






  locRef.push(x);
});


$("#formLoc37").submit(function(e){
  e.preventDefault();
  var x = {
    desc37:$('#nameLoc37').val(),
    name37:$('#descLoc37').val(),



  }; 






  locRef.push(x);
});

$("#formLoc38").submit(function(e){
  e.preventDefault();
  var x = {
    desc38:$('#nameLoc38').val(),
    name38:$('#descLoc38').val(),



  }; 






  locRef.push(x);
});


$("#formLoc39").submit(function(e){
  e.preventDefault();
  var x = {
    desc39:$('#nameLoc39').val(),
    name39:$('#descLoc39').val(),



  }; 






  locRef.push(x);
});


$("#formLoc40").submit(function(e){
  e.preventDefault();
  var x = {
    desc40:$('#nameLoc40').val(),
    name40:$('#descLoc40').val(),



  }; 






  locRef.push(x);
});

$("#formLoc41").submit(function(e){
  e.preventDefault();
  var x = {
    desc41:$('#nameLoc41').val(),
    name41:$('#descLoc41').val(),



  }; 






  locRef.push(x);
});


$("#formLoc42").submit(function(e){
  e.preventDefault();
  var x = {
    desc42:$('#nameLoc42').val(),
    name42:$('#descLoc42').val(),



  }; 






  locRef.push(x);
});


$("#formLoc43").submit(function(e){
  e.preventDefault();
  var x = {
    desc43:$('#nameLoc43').val(),
    name43:$('#descLoc43').val(),



  }; 






  locRef.push(x);
});


$("#formLoc44").submit(function(e){
  e.preventDefault();
  var x = {
    desc44:$('#nameLoc44').val(),
    name44:$('#descLoc44').val(),



  }; 






  locRef.push(x);
});


$("#formLoc45").submit(function(e){
  e.preventDefault();
  var x = {
    desc45:$('#nameLoc45').val(),
    name45:$('#descLoc45').val(),



  }; 






  locRef.push(x);
});


$("#formLoc46").submit(function(e){
  e.preventDefault();
  var x = {
    desc46:$('#nameLoc46').val(),
    name46:$('#descLoc46').val(),



  }; 






  locRef.push(x);
});


$("#formLoc47").submit(function(e){
  e.preventDefault();
  var x = {
    desc47:$('#nameLoc47').val(),
    name47:$('#descLoc47').val(),



  }; 






  locRef.push(x);
});


$("#formLoc48").submit(function(e){
  e.preventDefault();
  var x = {
    desc48:$('#nameLoc48').val(),
    name48:$('#descLoc48').val(),



  }; 






  locRef.push(x);
});


$("#formLoc49").submit(function(e){
  e.preventDefault();
  var x = {
    desc49:$('#nameLoc49').val(),
    name49:$('#descLoc49').val(),



  }; 






  locRef.push(x);
});


$("#formLoc50").submit(function(e){
  e.preventDefault();
  var x = {
    desc50:$('#nameLoc50').val(),
    name50:$('#descLoc50').val(),



  }; 






  locRef.push(x);
});


$("#formLoc51").submit(function(e){
  e.preventDefault();
  var x = {
    desc51:$('#nameLoc51').val(),
    name51:$('#descLoc51').val(),



  }; 






  locRef.push(x);
});


$("#formLoc52").submit(function(e){
  e.preventDefault();
  var x = {
    desc52:$('#nameLoc52').val(),
    name52:$('#descLoc52').val(),



  }; 






  locRef.push(x);
});


$("#formLoc53").submit(function(e){
  e.preventDefault();
  var x = {
    desc53:$('#nameLoc53').val(),
    name53:$('#descLoc53').val(),



  }; 






  locRef.push(x);
});


$("#formLoc54").submit(function(e){
  e.preventDefault();
  var x = {
    desc54:$('#nameLoc54').val(),
    name54:$('#descLoc54').val(),



  }; 






  locRef.push(x);
});

$("#formLoc55").submit(function(e){
  e.preventDefault();
  var x = {
    desc55:$('#nameLoc55').val(),
    name55:$('#descLoc55').val(),



  }; 






  locRef.push(x);
});

$("#formLoc56").submit(function(e){
  e.preventDefault();
  var x = {
    desc56:$('#nameLoc56').val(),
    name56:$('#descLoc56').val(),



  }; 






  locRef.push(x);
});

$("#formLoc57").submit(function(e){
  e.preventDefault();
  var x = {
    desc57:$('#nameLoc57').val(),
    name57:$('#descLoc57').val(),



  }; 






  locRef.push(x);
});


$("#formLoc58").submit(function(e){
  e.preventDefault();
  var x = {
    desc58:$('#nameLoc58').val(),
    name58:$('#descLoc58').val(),



  }; 






  locRef.push(x);
});

$("#formLoc59").submit(function(e){
  e.preventDefault();
  var x = {
    desc59:$('#nameLoc59').val(),
    name59:$('#descLoc59').val(),



  }; 






  locRef.push(x);
});


$("#formLoc60").submit(function(e){
  e.preventDefault();
  var x = {
    desc60:$('#nameLoc60').val(),
    name60:$('#descLoc60').val(),



  }; 






  locRef.push(x);
});


$("#formLoc61").submit(function(e){
  e.preventDefault();
  var x = {
    desc61:$('#nameLoc61').val(),
    name61:$('#descLoc61').val(),



  }; 






  locRef.push(x);
});


$("#formLoc62").submit(function(e){
  e.preventDefault();
  var x = {
    desc62:$('#nameLoc62').val(),
    name62:$('#descLoc62').val(),



  }; 






  locRef.push(x);
});

$("#formLoc63").submit(function(e){
  e.preventDefault();
  var x = {
    desc63:$('#nameLoc63').val(),
    name63:$('#descLoc63').val(),



  }; 






  locRef.push(x);
});

$("#formLoc64").submit(function(e){
  e.preventDefault();
  var x = {
    desc64:$('#nameLoc64').val(),
    name64:$('#descLoc64').val(),



  }; 






  locRef.push(x);
});


$("#formLoc65").submit(function(e){
  e.preventDefault();
  var x = {
    desc65:$('#nameLoc65').val(),
    name65:$('#descLoc65').val(),



  }; 






  locRef.push(x);
});

$("#formLoc66").submit(function(e){
  e.preventDefault();
  var x = {
    desc66:$('#nameLoc66').val(),
    name66:$('#descLoc66').val(),



  }; 






  locRef.push(x);
});

$("#formLoc67").submit(function(e){
  e.preventDefault();
  var x = {
    desc67:$('#nameLoc67').val(),
    name67:$('#descLoc67').val(),



  }; 






  locRef.push(x);
});


$("#formLoc68").submit(function(e){
  e.preventDefault();
  var x = {
    desc68:$('#nameLoc68').val(),
    name68:$('#descLoc68').val(),



  }; 






  locRef.push(x);
});


$("#formLoc69").submit(function(e){
  e.preventDefault();
  var x = {
    desc69:$('#nameLoc69').val(),
    name69:$('#descLoc69').val(),



  }; 






  locRef.push(x);
});


$("#formLoc70").submit(function(e){
  e.preventDefault();
  var x = {
    desc70:$('#nameLoc70').val(),
    name70:$('#descLoc70').val(),



  }; 






  locRef.push(x);
});



$("#formLoc71").submit(function(e){
  e.preventDefault();
  var x = {
    desc71:$('#nameLoc71').val(),
    name71:$('#descLoc71').val(),



  }; 






  locRef.push(x);
});


$("#formLoc72").submit(function(e){
  e.preventDefault();
  var x = {
    desc72:$('#nameLoc72').val(),
    name72:$('#descLoc72').val(),



  }; 






  locRef.push(x);
});


$("#formLoc73").submit(function(e){
  e.preventDefault();
  var x = {
    desc73:$('#nameLoc73').val(),
    name73:$('#descLoc73').val(),



  }; 






  locRef.push(x);
});


$("#formLoc74").submit(function(e){
  e.preventDefault();
  var x = {
    desc74:$('#nameLoc74').val(),
    name74:$('#descLoc74').val(),



  }; 






  locRef.push(x);
});


$("#formLoc75").submit(function(e){
  e.preventDefault();
  var x = {
    desc75:$('#nameLoc75').val(),
    name75:$('#descLoc75').val(),



  }; 






  locRef.push(x);
});


