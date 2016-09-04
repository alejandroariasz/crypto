var apiKey = 'crypto-142421';
var clientId = '1097194985922-rvgtvh1s73i88h9f3ojfb2dvhbcorl90.apps.googleusercontent.com';
var scopes = 'profile';

function init() {
	
	gapi.client.setApiKey(apiKey);
	var rootpath = 'https://' +  apiKey + '.appspot.com' + '/_ah/api';	
	gapi.client.load('cryptoAPI', 'v2', function(){
		var plainText = 'THEBOYWALKSINTHE';
		var request = gapi.client.cryptoAPI.getN({'n':plainText});
		request.execute(testService);
	});
}

function testService (response) {
	alert(response.message);
}