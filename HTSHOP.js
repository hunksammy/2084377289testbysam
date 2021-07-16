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
    name1:$('#nameLoc').val(),
    desc2:$('#descLoc').val(),
  


	
  }; 






  locRef.push(x);
});
