// create your User model here
const {DataTypes, db, Model} = require('../db/config');

class User extends Model {
    static {
        User.init({
            username: DataTypes.STRING,
    
        }, {
            sequelize: db,
        })
    }
}

module.exports = {
    User,
}