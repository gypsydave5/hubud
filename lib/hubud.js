
$(document).ready(function() {
	var username;
	var API_TOKEN = "49bf3d1c4360a29e76973028ae09571d89250153";

	$('#input').on('submit', function(event) {
		event.preventDefault();
		username = $('#username').val();
		var url = "https://api.github.com/users/" + username + "?token=" + API_TOKEN;
		console.log(url);
		var userData = $.get(url, function(user) {
			$('<article class="profile"><figure class="pic"><img src="' + user.avatar_url + '"></figure><p>' + user.login + '</p></article>').appendTo('.profile-container');
		});
	});



});   




