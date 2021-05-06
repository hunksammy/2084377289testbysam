const endpoints="https://raw.githubusercontent.com/hunksammy/2084377289testbysam/main/myapp.api";



fetch(endpoints)
 .then(blob => blob.json())
 .then(data => {
 ul.innerHTML=data.map(place => `<h1><div class="item">${place.date}</div></h1><br> `).join("");
})

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})