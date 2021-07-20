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
    desc1:$('#nameLoc').val(),
    name1:$('#descLoc').val(),


	
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


