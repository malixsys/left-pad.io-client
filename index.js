module.exports = leftpad;

function leftpad (str, len, ch) {
	var body = require('sync-request')(
			'GET',
			'https://api.left-pad.io/?str=' +
			encodeURIComponent(str) + 
			(len !== void 0 ? '&len=' + encodeURIComponent(len) : '0') + 
			(ch !== void 0 ? '&ch=' + encodeURIComponent(ch) : '')
		  ).getBody('utf8');
	return JSON.parse(body).str;
}
