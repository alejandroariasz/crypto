var apiKey = 'AIzaSyDMUhDepvPT_wN5dWY0GMtwsi1K9wgl4R4';
var clientId = '880095029109-1n00qprerku742mvaot83ddnvcnsc7u6.apps.googleusercontent.com';
var scopes = 'profile';

function init() {
	
	gapi.client.setApiKey(apiKey);
	var rootpath = 'https://' +  "turning-grille" + ".appspot.com" +  '/_ah/api';	
	gapi.client.load('turning', 'v1', function(){
		var n = 4;
		var request = gapi.client.turning.generateKey({'n': n});
		request.execute(testService);
	}, rootpath);
}

function testService (response) {
	alert(response.data);
	alert( stringToArray(response.data) );
}

function stringToArray(var stringToParse){
	stringToParse.replace("[", "");
	stringToParse.replace("]", "");
	var arr = stringToParse.split(",");
	return arr;
}