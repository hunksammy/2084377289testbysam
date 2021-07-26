var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/location');

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
    name11:$('#nameLoc11').val(),
    desc11:$('#descLoc11').val()
  }; 
  locRef.push(x);
});