var passport = require('passport');
require('../../config/passport')(passport)

module.exports = function(app) {
    app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:name' ] }));

    app.get('/auth/github/callback',
    passport.authenticate('github', {
        successRedirect: '/'
    }
    ));

    app.get('/', function(req, res, next) {
        if(req.isAuthenticated()) {
            // permite que outras rotas sejam processadas
            return next();
        } else {
            // renderiza auth.ejs
            res.render("auth");
        }
    });

    app.get('/logout', function(req,res){
        req.logOut();
        res.redirect('/');
    });
}