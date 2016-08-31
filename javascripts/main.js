var apiKey = 'crypto-142003';
var clientId = '1097194985922-rvgtvh1s73i88h9f3ojfb2dvhbcorl90.apps.googleusercontent.com';
var scopes = 'profile';

function init() {
	
	gapi.client.setApiKey(apiKey);
	var rootpath = "https://" + "crypto-142003.appspot.com" + "/_ah/api";	
	gapi.client.load('cryptoAPI', 'v1', loadCallback, rootpath);
}

function loadCallback () {	
	var n = 4;
	var request = gapi.client.cryptoAPI.generateKey({'n': n});
	request.execute(testService);
}

function testService (response) {
	alert(response.message);	
}