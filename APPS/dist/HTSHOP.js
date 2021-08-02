var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});













$("#formLoc11").submit(function(e){
  e.preventDefault();
  var x = {
    desc11:$('#nameLoc401').val(),
    name11:$('#descLoc401').val(),



  }; 






  locRef.push(x);
});


$("#formLoc11").submit(function(e){
  e.preventDefault();
  var x = {
    desc11:$('#nameLoc401').val(),
    name11:$('#descLoc401').val(),



  }; 






  locRef.push(x);
});