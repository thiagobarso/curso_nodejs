//var dbConnection = require('../../config/dbConnection');
module.exports = function(application){
	//var connection = dbConnection();
	application.get('/noticias',function(req,res){
		application.app.controllers.noticias.noticias(application, req, res);
		
	});

	application.get('/noticia',function(req,res){
		application.app.controllers.noticias.noticia(application, req, res);
	});
};