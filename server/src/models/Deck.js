const {DataTypes, db, Model} = require('../db/config');

class Deck extends Model {
    static {
        Deck.init({
            name: DataTypes.STRING,
            xp: DataTypes.INTEGER,
        }, {
            sequelize: db,
        });
    }
}

module.exports = {
    Deck,
}