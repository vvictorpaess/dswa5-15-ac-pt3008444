var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(
		new GitHubStrategy(
			{
				clientID: 'a38ebefcb4b4df216e6c',
				clientSecret: 'f07838dd0261b00ae1375899b3d02c0c291a0533',
				callbackURL:
					'https://dswa5-15-ac-pt3008444.herokuapp.com/auth/github/callback',
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
