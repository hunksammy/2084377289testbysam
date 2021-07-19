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
    descCUST:$('#nameLocCUST').val(),
    nameCUST:$('#descLocCUST').val(),


	
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

