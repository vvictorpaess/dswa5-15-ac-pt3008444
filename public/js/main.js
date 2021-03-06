angular
	.module('ifsp', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController',
		});

		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController',
		});

		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController',
		});

		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController',
		});

		$routeProvider.when('/cursos', {
			templateUrl: 'partials/cursos.html',
			controller: 'CursosController',
		});

		$routeProvider.when('/curso/:cursoId', {
			templateUrl: 'partials/curso.html',
			controller: 'CursoController',
		});

		$routeProvider.when('/curso', {
			templateUrl: 'partials/curso.html',
			controller: 'CursoController',
		});

		$routeProvider.when('/error', {
			templateUrl: 'partials/404.html',
		});

		$routeProvider.otherwise({ redirectTo: '/error' });
	});
