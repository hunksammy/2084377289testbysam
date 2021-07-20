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




$("#formLoc1).submit(function(e){	
  e.preventDefault();	
  var x = {	
    desc1:$('#nameLoc1').val(),	
    name1:$('#descLoc1').val(),	
	
	
	
  }; 	
	
	
	
	
	
	
  locRef.push(x);	
});	



$("#formLoc2).submit(function(e){
  e.preventDefault();
  var x = {
    desc2:$('#nameLoc2').val(),
    name2:$('#descLoc2').val(),



  }; 






  locRef.push(x);
});


$("#formLoc3).submit(function(e){
  e.preventDefault();
  var x = {
    desc3:$('#nameLoc3').val(),
    name3:$('#descLoc3').val(),



  }; 






  locRef.push(x);
});


$("#formLoc4).submit(function(e){
  e.preventDefault();
  var x = {
    desc4:$('#nameLoc4').val(),
    name4:$('#descLoc4').val(),



  }; 






  locRef.push(x);
});



$("#formLoc5).submit(function(e){
  e.preventDefault();
  var x = {
    desc5:$('#nameLoc5').val(),
    name5:$('#descLoc5').val(),



  }; 






  locRef.push(x);
});


$("#formLoc6).submit(function(e){
  e.preventDefault();
  var x = {
    desc6:$('#nameLoc6').val(),
    name6:$('#descLoc6').val(),



  }; 






  locRef.push(x);
});


$("#formLoc7).submit(function(e){
  e.preventDefault();
  var x = {
    desc7:$('#nameLoc7').val(),
    name7:$('#descLoc7').val(),



  }; 






  locRef.push(x);
});

$("#formLoc8).submit(function(e){
  e.preventDefault();
  var x = {
    desc8:$('#nameLoc8').val(),
    name8:$('#descLoc8').val(),



  }; 






  locRef.push(x);
});

$("#formLoc9).submit(function(e){
  e.preventDefault();
  var x = {
    desc9:$('#nameLoc9').val(),
    name9:$('#descLoc9').val(),



  }; 






  locRef.push(x);
});


$("#formLoc10).submit(function(e){
  e.preventDefault();
  var x = {
    desc10:$('#nameLoc10').val(),
    name10:$('#descLoc10').val(),



  }; 






  locRef.push(x);
});


$("#formLoc11).submit(function(e){
  e.preventDefault();
  var x = {
    desc11:$('#nameLoc11').val(),
    name11:$('#descLoc11').val(),



  }; 






  locRef.push(x);
});


$("#formLoc12).submit(function(e){
  e.preventDefault();
  var x = {
    desc12:$('#nameLoc12').val(),
    name12:$('#descLoc12').val(),



  }; 






  locRef.push(x);
});


$("#formLoc13).submit(function(e){
  e.preventDefault();
  var x = {
    desc13:$('#nameLoc13').val(),
    name13:$('#descLoc13').val(),



  }; 






  locRef.push(x);
});


$("#formLoc14).submit(function(e){
  e.preventDefault();
  var x = {
    desc14:$('#nameLoc14').val(),
    name14:$('#descLoc14').val(),



  }; 






  locRef.push(x);
});


$("#formLoc15).submit(function(e){
  e.preventDefault();
  var x = {
    desc15:$('#nameLoc15').val(),
    name15:$('#descLoc15').val(),



  }; 






  locRef.push(x);
});


$("#formLoc16).submit(function(e){
  e.preventDefault();
  var x = {
    desc16:$('#nameLoc16').val(),
    name16:$('#descLoc16').val(),



  }; 






  locRef.push(x);
});


$("#formLoc17).submit(function(e){
  e.preventDefault();
  var x = {
    desc17:$('#nameLoc17').val(),
    name17:$('#descLoc17').val(),



  }; 






  locRef.push(x);
});


$("#formLoc18).submit(function(e){
  e.preventDefault();
  var x = {
    desc18:$('#nameLoc18').val(),
    name18:$('#descLoc18').val(),



  }; 






  locRef.push(x);
});

$("#formLoc19).submit(function(e){
  e.preventDefault();
  var x = {
    desc19:$('#nameLoc19').val(),
    name19:$('#descLoc19').val(),



  }; 






  locRef.push(x);
});


$("#formLoc20).submit(function(e){
  e.preventDefault();
  var x = {
    desc20:$('#nameLoc20').val(),
    name20:$('#descLoc20').val(),



  }; 






  locRef.push(x);
});




