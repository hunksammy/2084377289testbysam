var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});


$("#formLoc").submit(function(e){
  e.preventDefault();
  var x = {
    name:$('#nameLoc').val(),
    desc:$('#descLoc').val(),
    


	
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



$("#formLoc71").submit(function(e){
  e.preventDefault();
  var x = {
    name:$('#nameLoc71').val(),
    desc:$('#descLoc71').val(),
    


	
  }; 






  locRef.push(x);
});
