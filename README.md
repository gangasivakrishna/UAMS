# UAMS
User Access Management is the administration of giving individual users within a system access to resources or user accounts 

# Easy Node Authentication

Code for then Node Authentication and User Access management

We will be using Passport to authenticate users locally, with Facebook, and Google.


## Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone https://github.com/gangasivakrishna/UAMS.git`
2. Install packages: `npm install`
3. Change out the database configuration in config/database.js
4. Change out auth keys in config/auth.js
5. Download and Install ngrok for expose a local web server to the internet.It is required for facebook login.
6. Change out the callbackUrl in  config/auth.js for facebook and do the same in Facebook App that we created in facebook developers account.
Download link : https://ngrok.com/download
How to run: $ ./ngrok http 80
7. Launch: `node server.js`
8. Visit in your browser at: `http://localhost:5000`

## Functionalities

1. Passport Authentication
2. User Access Management

Local users can signup as Admin, Moderator and User role.
Facebook and Gooogle users can defaulty register as User role.

Admin can access all user profiles
Moderator can access users which has moderator and user roles
User only can view profile of himself.

