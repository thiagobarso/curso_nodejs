module.exports.noticias = function(application, req, res){
	var connection = application.config.dbConnection();
	var noticiasDAO = new application.app.models.NoticiasDAO(connection);
	
	noticiasDAO.getNoticias(function(erro, result){
		//res.send(result);
		res.render("noticias/noticias",{noticias : result});
	});
}

module.exports.noticia = function(application, req, res){
	var connection = application.config.dbConnection();
	//var connection = dbConnection();
	var noticiasDAO = new application.app.models.NoticiasDAO(connection);

	var id_noticia = req.query;

	noticiasDAO.getNoticia(id_noticia, function(erro, result){
		//res.send(result);
		res.render("noticias/noticia",{noticia : result});
	});
}