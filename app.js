var app = require('./config/server');

/*
var rotaNoticias = require('./app/routes/noticias')(app);

var noticias = require('./app/routes/noticia')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);*/

app.listen(3000, function(){
	console.log('Servidor ON');
});