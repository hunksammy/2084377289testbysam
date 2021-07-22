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

$("#formLoc76").submit(function(e){
  e.preventDefault();
  var x = {
    desc76:$('#nameLoc76').val(),
    name76:$('#descLoc76').val(),



  }; 






  locRef.push(x);
});

$("#formLoc77").submit(function(e){
  e.preventDefault();
  var x = {
    desc77:$('#nameLoc77').val(),
    name77:$('#descLoc77').val(),



  }; 






  locRef.push(x);
});


$("#formLoc78").submit(function(e){
  e.preventDefault();
  var x = {
    desc78:$('#nameLoc78').val(),
    name78:$('#descLoc78').val(),



  }; 






  locRef.push(x);
});


$("#formLoc79").submit(function(e){
  e.preventDefault();
  var x = {
    desc79:$('#nameLoc79').val(),
    name79:$('#descLoc79').val(),



  }; 






  locRef.push(x);
});


$("#formLoc80").submit(function(e){
  e.preventDefault();
  var x = {
    desc80:$('#nameLoc80').val(),
    name80:$('#descLoc80').val(),



  }; 






  locRef.push(x);
});

$("#formLoc81").submit(function(e){
  e.preventDefault();
  var x = {
    desc81:$('#nameLoc81').val(),
    name81:$('#descLoc81').val(),



  }; 






  locRef.push(x);
});


$("#formLoc82").submit(function(e){
  e.preventDefault();
  var x = {
    desc82:$('#nameLoc82').val(),
    name82:$('#descLoc82').val(),



  }; 






  locRef.push(x);
});



$("#formLoc83").submit(function(e){
  e.preventDefault();
  var x = {
    desc83:$('#nameLoc83').val(),
    name83:$('#descLoc83').val(),



  }; 






  locRef.push(x);
});


$("#formLoc84").submit(function(e){
  e.preventDefault();
  var x = {
    desc84:$('#nameLoc84').val(),
    name84:$('#descLoc84').val(),



  }; 






  locRef.push(x);
});


$("#formLoc85").submit(function(e){
  e.preventDefault();
  var x = {
    desc85:$('#nameLoc85').val(),
    name85:$('#descLoc85').val(),



  }; 






  locRef.push(x);
});


$("#formLoc86").submit(function(e){
  e.preventDefault();
  var x = {
    desc86:$('#nameLoc86').val(),
    name86:$('#descLoc86').val(),



  }; 






  locRef.push(x);
});


$("#formLoc87").submit(function(e){
  e.preventDefault();
  var x = {
    desc87:$('#nameLoc87').val(),
    name87:$('#descLoc87').val(),



  }; 






  locRef.push(x);
});


$("#formLoc88").submit(function(e){
  e.preventDefault();
  var x = {
    desc88:$('#nameLoc88').val(),
    name88:$('#descLoc88').val(),



  }; 






  locRef.push(x);
});


$("#formLoc89").submit(function(e){
  e.preventDefault();
  var x = {
    desc89:$('#nameLoc89').val(),
    name89:$('#descLoc89').val(),



  }; 






  locRef.push(x);
});


$("#formLoc90").submit(function(e){
  e.preventDefault();
  var x = {
    desc90:$('#nameLoc90').val(),
    name90:$('#descLoc90').val(),



  }; 






  locRef.push(x);
});

$("#formLoc91").submit(function(e){
  e.preventDefault();
  var x = {
    desc91:$('#nameLoc91').val(),
    name91:$('#descLoc91').val(),



  }; 






  locRef.push(x);
});

$("#formLoc92").submit(function(e){
  e.preventDefault();
  var x = {
    desc92:$('#nameLoc92').val(),
    name92:$('#descLoc92').val(),



  }; 






  locRef.push(x);
});

$("#formLoc93").submit(function(e){
  e.preventDefault();
  var x = {
    desc93:$('#nameLoc93').val(),
    name93:$('#descLoc93').val(),



  }; 






  locRef.push(x);
});

$("#formLoc94").submit(function(e){
  e.preventDefault();
  var x = {
    desc94:$('#nameLoc94').val(),
    name94:$('#descLoc94').val(),



  }; 






  locRef.push(x);
});


$("#formLoc95").submit(function(e){
  e.preventDefault();
  var x = {
    desc95:$('#nameLoc95').val(),
    name95:$('#descLoc95').val(),



  }; 






  locRef.push(x);
});

$("#formLoc96").submit(function(e){
  e.preventDefault();
  var x = {
    desc96:$('#nameLoc96').val(),
    name96:$('#descLoc96').val(),



  }; 






  locRef.push(x);
});

$("#formLoc97").submit(function(e){
  e.preventDefault();
  var x = {
    desc97:$('#nameLoc97').val(),
    name97:$('#descLoc97').val(),



  }; 






  locRef.push(x);
});

$("#formLoc98").submit(function(e){
  e.preventDefault();
  var x = {
    desc98:$('#nameLoc98').val(),
    name98:$('#descLoc98').val(),



  }; 






  locRef.push(x);
});

$("#formLoc99").submit(function(e){
  e.preventDefault();
  var x = {
    desc99:$('#nameLoc99').val(),
    name99:$('#descLoc99').val(),



  }; 






  locRef.push(x);
});

$("#formLoc100").submit(function(e){
  e.preventDefault();
  var x = {
    desc100:$('#nameLoc100').val(),
    name100:$('#descLoc100').val(),



  }; 






  locRef.push(x);
});

$("#formLoc101").submit(function(e){
  e.preventDefault();
  var x = {
    desc101:$('#nameLoc101').val(),
    name101:$('#descLoc101').val(),



  }; 






  locRef.push(x);
});

$("#formLoc102").submit(function(e){
  e.preventDefault();
  var x = {
    desc102:$('#nameLoc102').val(),
    name102:$('#descLoc102').val(),



  }; 






  locRef.push(x);
});

$("#formLoc103").submit(function(e){
  e.preventDefault();
  var x = {
    desc103:$('#nameLoc103').val(),
    name103:$('#descLoc103').val(),



  }; 






  locRef.push(x);
});

$("#formLoc104").submit(function(e){
  e.preventDefault();
  var x = {
    desc104:$('#nameLoc104').val(),
    name104:$('#descLoc104').val(),



  }; 






  locRef.push(x);
});

$("#formLoc105").submit(function(e){
  e.preventDefault();
  var x = {
    desc105:$('#nameLoc105').val(),
    name105:$('#descLoc105').val(),



  }; 






  locRef.push(x);
});

$("#formLoc106").submit(function(e){
  e.preventDefault();
  var x = {
    desc106:$('#nameLoc106').val(),
    name106:$('#descLoc106').val(),



  }; 






  locRef.push(x);
});

$("#formLoc107").submit(function(e){
  e.preventDefault();
  var x = {
    desc107:$('#nameLoc107').val(),
    name107:$('#descLoc107').val(),



  }; 






  locRef.push(x);
});

$("#formLoc108").submit(function(e){
  e.preventDefault();
  var x = {
    desc108:$('#nameLoc108').val(),
    name108:$('#descLoc108').val(),



  }; 






  locRef.push(x);
});

$("#formLoc109").submit(function(e){
  e.preventDefault();
  var x = {
    desc109:$('#nameLoc109').val(),
    name109:$('#descLoc109').val(),



  }; 






  locRef.push(x);
});

$("#formLoc110").submit(function(e){
  e.preventDefault();
  var x = {
    desc110:$('#nameLoc110').val(),
    name110:$('#descLoc110').val(),



  }; 






  locRef.push(x);
});

$("#formLoc111").submit(function(e){
  e.preventDefault();
  var x = {
    desc111:$('#nameLoc111').val(),
    name111:$('#descLoc111').val(),



  }; 






  locRef.push(x);
});

$("#formLoc112").submit(function(e){
  e.preventDefault();
  var x = {
    desc112:$('#nameLoc112').val(),
    name112:$('#descLoc112').val(),



  }; 






  locRef.push(x);
});

$("#formLoc113").submit(function(e){
  e.preventDefault();
  var x = {
    desc113:$('#nameLoc113').val(),
    name113:$('#descLoc113').val(),



  }; 






  locRef.push(x);
});

$("#formLoc114").submit(function(e){
  e.preventDefault();
  var x = {
    desc114:$('#nameLoc114').val(),
    name114:$('#descLoc114').val(),



  }; 






  locRef.push(x);
});

$("#formLoc115").submit(function(e){
  e.preventDefault();
  var x = {
    desc115:$('#nameLoc115').val(),
    name115:$('#descLoc115').val(),



  }; 






  locRef.push(x);
});

$("#formLoc116").submit(function(e){
  e.preventDefault();
  var x = {
    desc116:$('#nameLoc116').val(),
    name116:$('#descLoc116').val(),



  }; 






  locRef.push(x);
});

$("#formLoc117").submit(function(e){
  e.preventDefault();
  var x = {
    desc117:$('#nameLoc117').val(),
    name117:$('#descLoc117').val(),



  }; 






  locRef.push(x);
});

$("#formLoc118").submit(function(e){
  e.preventDefault();
  var x = {
    desc118:$('#nameLoc118').val(),
    name118:$('#descLoc118').val(),



  }; 






  locRef.push(x);
});

$("#formLoc119").submit(function(e){
  e.preventDefault();
  var x = {
    desc119:$('#nameLoc119').val(),
    name119:$('#descLoc119').val(),



  }; 






  locRef.push(x);
});

$("#formLoc120").submit(function(e){
  e.preventDefault();
  var x = {
    desc120:$('#nameLoc120').val(),
    name120:$('#descLoc120').val(),



  }; 






  locRef.push(x);
});

$("#formLoc121").submit(function(e){
  e.preventDefault();
  var x = {
    desc121:$('#nameLoc121').val(),
    name121:$('#descLoc121').val(),



  }; 






  locRef.push(x);
});

$("#formLoc122").submit(function(e){
  e.preventDefault();
  var x = {
    desc122:$('#nameLoc122').val(),
    name122:$('#descLoc122').val(),



  }; 






  locRef.push(x);
});

$("#formLoc123").submit(function(e){
  e.preventDefault();
  var x = {
    desc123:$('#nameLoc123').val(),
    name123:$('#descLoc123').val(),



  }; 






  locRef.push(x);
});

$("#formLoc124").submit(function(e){
  e.preventDefault();
  var x = {
    desc124:$('#nameLoc124').val(),
    name124:$('#descLoc124').val(),



  }; 






  locRef.push(x);
});

$("#formLoc125").submit(function(e){
  e.preventDefault();
  var x = {
    desc125:$('#nameLoc125').val(),
    name125:$('#descLoc125').val(),



  }; 






  locRef.push(x);
});

$("#formLoc126").submit(function(e){
  e.preventDefault();
  var x = {
    desc126:$('#nameLoc126').val(),
    name126:$('#descLoc126').val(),



  }; 






  locRef.push(x);
});

$("#formLoc127").submit(function(e){
  e.preventDefault();
  var x = {
    desc127:$('#nameLoc127').val(),
    name127:$('#descLoc127').val(),



  }; 






  locRef.push(x);
});

$("#formLoc128").submit(function(e){
  e.preventDefault();
  var x = {
    desc128:$('#nameLoc128').val(),
    name128:$('#descLoc128').val(),



  }; 






  locRef.push(x);
});

$("#formLoc129").submit(function(e){
  e.preventDefault();
  var x = {
    desc129:$('#nameLoc129').val(),
    name129:$('#descLoc129').val(),



  }; 






  locRef.push(x);
});

$("#formLoc130").submit(function(e){
  e.preventDefault();
  var x = {
    desc130:$('#nameLoc130').val(),
    name130:$('#descLoc130').val(),



  }; 






  locRef.push(x);
});


$("#formLoc131").submit(function(e){
  e.preventDefault();
  var x = {
    desc131:$('#nameLoc131').val(),
    name131:$('#descLoc131').val(),



  }; 






  locRef.push(x);
});

$("#formLoc132").submit(function(e){
  e.preventDefault();
  var x = {
    desc132:$('#nameLoc132').val(),
    name132:$('#descLoc132').val(),



  }; 






  locRef.push(x);
});

$("#formLoc133").submit(function(e){
  e.preventDefault();
  var x = {
    desc133:$('#nameLoc133').val(),
    name133:$('#descLoc133').val(),



  }; 






  locRef.push(x);
});

$("#formLoc134").submit(function(e){
  e.preventDefault();
  var x = {
    desc134:$('#nameLoc134').val(),
    name134:$('#descLoc134').val(),



  }; 






  locRef.push(x);
});

$("#formLoc135").submit(function(e){
  e.preventDefault();
  var x = {
    desc135:$('#nameLoc135').val(),
    name135:$('#descLoc135').val(),



  }; 






  locRef.push(x);
});


$("#formLoc136").submit(function(e){
  e.preventDefault();
  var x = {
    desc136:$('#nameLoc136').val(),
    name136:$('#descLoc136').val(),



  }; 






  locRef.push(x);
});

$("#formLoc137").submit(function(e){
  e.preventDefault();
  var x = {
    desc137:$('#nameLoc137').val(),
    name137:$('#descLoc137').val(),



  }; 






  locRef.push(x);
});

$("#formLoc138").submit(function(e){
  e.preventDefault();
  var x = {
    desc138:$('#nameLoc138').val(),
    name138:$('#descLoc138').val(),



  }; 






  locRef.push(x);
});

$("#formLoc139").submit(function(e){
  e.preventDefault();
  var x = {
    desc139:$('#nameLoc139').val(),
    name139:$('#descLoc139').val(),



  }; 






  locRef.push(x);
});


$("#formLoc140").submit(function(e){
  e.preventDefault();
  var x = {
    desc140:$('#nameLoc140').val(),
    name140:$('#descLoc140').val(),



  }; 






  locRef.push(x);
});


$("#formLoc141").submit(function(e){
  e.preventDefault();
  var x = {
    desc141:$('#nameLoc141').val(),
    name141:$('#descLoc141').val(),



  }; 






  locRef.push(x);
});


$("#formLoc142").submit(function(e){
  e.preventDefault();
  var x = {
    desc142:$('#nameLoc142').val(),
    name142:$('#descLoc142').val(),



  }; 






  locRef.push(x);
});

$("#formLoc143").submit(function(e){
  e.preventDefault();
  var x = {
    desc143:$('#nameLoc143').val(),
    name143:$('#descLoc143').val(),



  }; 






  locRef.push(x);
});


$("#formLoc144").submit(function(e){
  e.preventDefault();
  var x = {
    desc144:$('#nameLoc144').val(),
    name144:$('#descLoc144').val(),



  }; 






  locRef.push(x);
});

$("#formLoc145").submit(function(e){
  e.preventDefault();
  var x = {
    desc145:$('#nameLoc145').val(),
    name145:$('#descLoc145').val(),



  }; 






  locRef.push(x);
});

$("#formLoc146").submit(function(e){
  e.preventDefault();
  var x = {
    desc146:$('#nameLoc146').val(),
    name146:$('#descLoc146').val(),



  }; 






  locRef.push(x);
});

$("#formLoc147").submit(function(e){
  e.preventDefault();
  var x = {
    desc147:$('#nameLoc147').val(),
    name147:$('#descLoc147').val(),



  }; 






  locRef.push(x);
});

$("#formLoc148").submit(function(e){
  e.preventDefault();
  var x = {
    desc148:$('#nameLoc148').val(),
    name148:$('#descLoc148').val(),



  }; 






  locRef.push(x);
});

$("#formLoc149").submit(function(e){
  e.preventDefault();
  var x = {
    desc149:$('#nameLoc149').val(),
    name149:$('#descLoc149').val(),



  }; 






  locRef.push(x);
});

$("#formLoc150").submit(function(e){
  e.preventDefault();
  var x = {
    desc150:$('#nameLoc150').val(),
    name150:$('#descLoc150').val(),



  }; 






  locRef.push(x);
});

$("#formLoc151").submit(function(e){
  e.preventDefault();
  var x = {
    desc151:$('#nameLoc151').val(),
    name151:$('#descLoc151').val(),



  }; 






  locRef.push(x);
});

$("#formLoc152").submit(function(e){
  e.preventDefault();
  var x = {
    desc152:$('#nameLoc152').val(),
    name152:$('#descLoc152').val(),



  }; 






  locRef.push(x);
});

$("#formLoc153").submit(function(e){
  e.preventDefault();
  var x = {
    desc153:$('#nameLoc153').val(),
    name153:$('#descLoc153').val(),



  }; 






  locRef.push(x);
});

$("#formLoc154").submit(function(e){
  e.preventDefault();
  var x = {
    desc154:$('#nameLoc154').val(),
    name154:$('#descLoc154').val(),



  }; 






  locRef.push(x);
});

$("#formLoc155").submit(function(e){
  e.preventDefault();
  var x = {
    desc155:$('#nameLoc155').val(),
    name155:$('#descLoc155').val(),



  }; 






  locRef.push(x);
});

$("#formLoc156").submit(function(e){
  e.preventDefault();
  var x = {
    desc156:$('#nameLoc156').val(),
    name156:$('#descLoc156').val(),



  }; 






  locRef.push(x);
});

$("#formLoc157").submit(function(e){
  e.preventDefault();
  var x = {
    desc157:$('#nameLoc157').val(),
    name157:$('#descLoc157').val(),



  }; 






  locRef.push(x);
});

$("#formLoc158").submit(function(e){
  e.preventDefault();
  var x = {
    desc158:$('#nameLoc158').val(),
    name158:$('#descLoc158').val(),



  }; 






  locRef.push(x);
});

$("#formLoc159").submit(function(e){
  e.preventDefault();
  var x = {
    desc159:$('#nameLoc159').val(),
    name159:$('#descLoc159').val(),



  }; 






  locRef.push(x);
});


$("#formLoc160").submit(function(e){
  e.preventDefault();
  var x = {
    desc160:$('#nameLoc160').val(),
    name160:$('#descLoc160').val(),



  }; 






  locRef.push(x);
});


$("#formLoc161").submit(function(e){
  e.preventDefault();
  var x = {
    desc161:$('#nameLoc161').val(),
    name161:$('#descLoc161').val(),



  }; 






  locRef.push(x);
});

$("#formLoc162").submit(function(e){
  e.preventDefault();
  var x = {
    desc162:$('#nameLoc162').val(),
    name162:$('#descLoc162').val(),



  }; 






  locRef.push(x);
});

$("#formLoc163").submit(function(e){
  e.preventDefault();
  var x = {
    desc163:$('#nameLoc163').val(),
    name163:$('#descLoc163').val(),



  }; 






  locRef.push(x);
});

$("#formLoc164").submit(function(e){
  e.preventDefault();
  var x = {
    desc164:$('#nameLoc164').val(),
    name164:$('#descLoc164').val(),



  }; 






  locRef.push(x);
});

$("#formLoc165").submit(function(e){
  e.preventDefault();
  var x = {
    desc165:$('#nameLoc165').val(),
    name165:$('#descLoc165').val(),



  }; 






  locRef.push(x);
});

$("#formLoc166").submit(function(e){
  e.preventDefault();
  var x = {
    desc166:$('#nameLoc166').val(),
    name166:$('#descLoc166').val(),



  }; 






  locRef.push(x);
});

$("#formLoc167").submit(function(e){
  e.preventDefault();
  var x = {
    desc167:$('#nameLoc167').val(),
    name167:$('#descLoc167').val(),



  }; 






  locRef.push(x);
});

$("#formLoc168").submit(function(e){
  e.preventDefault();
  var x = {
    desc168:$('#nameLoc168').val(),
    name168:$('#descLoc168').val(),



  }; 






  locRef.push(x);
});

$("#formLoc169").submit(function(e){
  e.preventDefault();
  var x = {
    desc169:$('#nameLoc169').val(),
    name169:$('#descLoc169').val(),



  }; 






  locRef.push(x);
});

$("#formLoc170").submit(function(e){
  e.preventDefault();
  var x = {
    desc170:$('#nameLoc170').val(),
    name170:$('#descLoc170').val(),



  }; 






  locRef.push(x);
});

$("#formLoc171").submit(function(e){
  e.preventDefault();
  var x = {
    desc171:$('#nameLoc171').val(),
    name171:$('#descLoc171').val(),



  }; 






  locRef.push(x);
});

$("#formLoc172").submit(function(e){
  e.preventDefault();
  var x = {
    desc172:$('#nameLoc172').val(),
    name172:$('#descLoc172').val(),



  }; 






  locRef.push(x);
});

$("#formLoc173").submit(function(e){
  e.preventDefault();
  var x = {
    desc173:$('#nameLoc173').val(),
    name173:$('#descLoc173').val(),



  }; 






  locRef.push(x);
});

$("#formLoc174").submit(function(e){
  e.preventDefault();
  var x = {
    desc174:$('#nameLoc174').val(),
    name174:$('#descLoc174').val(),



  }; 






  locRef.push(x);
});

$("#formLoc175").submit(function(e){
  e.preventDefault();
  var x = {
    desc175:$('#nameLoc175').val(),
    name175:$('#descLoc175').val(),



  }; 






  locRef.push(x);
});

