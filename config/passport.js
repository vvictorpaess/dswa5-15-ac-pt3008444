var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(
		new GitHubStrategy(
			{
				clientID: 'e11eebf697efef6e55e6',
				clientSecret: 'b9f9b3fa687434de3aa937d66cd4af3abd412ddf',
				callbackURL:
					'https://dswa5-14-ac-pt300984x.herokuapp.com/auth/github/callback',
			},
			function (accessToken, refreshToken, profile, done) {
				Usuario.findOrCreate(
					{ login: profile.username },
					{ nome: profile.username },
					function (erro, usuario) {
						if (erro) {
							console.log(erro);
							return done(erro);
						}
						return done(null, usuario);
					}
				);
			}
		)
	);

	passport.serializeUser(function (usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function (id, done) {
		Usuario.findById(id)
			.exec()
			.then(function (usuario) {
				done(null, usuario);
			});
	});
};
