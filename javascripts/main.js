var apiKey = 'crypto-142421';
var clientId = '1097746394668-ar5cp8agmfshrmf4f3q1dl72j80hfp6d.apps.googleusercontent.com';
var scopes = 'profile';

function init() {
	
	gapi.client.setApiKey(apiKey);
	var rootpath = 'https://' +  apiKey + '.appspot.com' + '/_ah/api/';	
	gapi.client.load('cryptoAPI', 'v2', function(){
		var plainText = 'THEBOYWALKSINTHE';
		var request = gapi.client.cryptoAPI.getN({'plainText':plainText});
		request.execute(testService);
	}, rootpath);
}

function testService (response) {
	alert(response.data);
}