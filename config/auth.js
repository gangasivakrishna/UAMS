module.exports = {

    'facebookAuth': {
        'clientID': '550564405752778', // your App ID
        'clientSecret': 'c1379b68363a6199c5ad8c024ed7fa13', // your App Secret
        'callbackURL': 'https://0c1dd18b.ngrok.io/auth/facebook/callback',//ngrok callback url for local setup
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },
    'googleAuth': {
        'clientID': '57400898624-fb6g7a36j89nse6v2ui9osln2415ak33.apps.googleusercontent.com',
        'clientSecret': 'j2IUgsaMt6XIJFesaye-J3B7',
        'callbackURL': 'http://localhost:5000/auth/google/callback'
    }

};
