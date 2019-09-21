var getProfiles = require('./getProfiles');
module.exports = function (app, passport) {

    /**
     * Profile Routes
     */
    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    app.get('/profile', isLoggedIn, async function (req, res) {
        var users = await getProfiles(req.user);
        res.render('profile.ejs', {
            users: users
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    /**
     * Authenticate Logins
     */
    app.get('/login', function (req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /**
     * Signup Validations
     */
    app.get('/signup', function (req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    /**
     * Facebook authentication
     * send to fb to do authentication /auth/facebook
     * handle the callback after fb has authenticated the user
     */
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    /**
     * Google OAuth
     * send to google to do the authentication /auth/google
     * the callback aftetr google has authenticated the user
     */

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
