var User = require('./models/user.js');
/**
 * Verifying role of user and fetching profiles
 */
async function getProfiles(user) {
    if (user.local.role === 'admin') {
        return await User.find({}).lean();;
    } else if (user.local.role === 'moderator') {
        let query = [{ "local.role": "user" }, { "local.role": "moderator" }, { "facebook.role": "user" }, { "google.role": "user" }]
        return await User.find({$or: query}).lean();;
    } else {
        return [user]
    }
}

module.exports = getProfiles;