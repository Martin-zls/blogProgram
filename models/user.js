var crypto = require('crypto');

module.exports = function(mongoose){
    var userSchema = new mongoose.Schema({
        name: String,
        password: String,
        email: String,
        head: String,
        role: String
    }, {
        collection: 'users'
    });

    var userModel = mongoose.model('User', userSchema);

    function User(user) {
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
    };

    User.prototype.save = function(callback) {

        var md5 = crypto.createHash('md5'),
            email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'),
            head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48",
            defaultRole = 'vacationer';

        var user = {
            name: this.name,
            password: this.password,
            email: this.email,
            head: head,
            role: defaultRole
        };

        var newUser = new userModel(user);

        newUser.save(function (err, user) {
            if (err) {
                return callback(err);
            }
            callback(null, user);
        });
    };

    User.get = function(name, callback) {
        userModel.findOne({name: name}, function (err, user) {
            if (err) {
                return callback(err);
            }
            callback(null, user);
        });
    };

    return User;
}
