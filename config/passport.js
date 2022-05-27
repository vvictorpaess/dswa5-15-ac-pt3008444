var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(
		new GitHubStrategy(
			{
				clientID: 'a1ef0422b4dbdf86817f',
				clientSecret: 'f4b9dda958a3c4277e160cd32a0c5d3159220e2f',
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
