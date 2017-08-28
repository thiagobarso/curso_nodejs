var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : '192.168.56.101',
		user : 'root',
		password : 'root',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}