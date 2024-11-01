const {DataTypes, db, Model} = require('../db/config');

class Card extends Model {
    static {
        Card.init({
            name: DataTypes.STRING,
            mojo: DataTypes.INTEGER,
            stamina: DataTypes.INTEGER,
            imgUrl: DataTypes.STRING,
        }, {
            sequelize: db,
        });
    }
}

module.exports = {
    Card,
}