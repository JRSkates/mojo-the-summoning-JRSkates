const { User } = require("./User");
const { Card } = require("./Card");
const { Deck } = require("./Deck");
const { Attack } = require("./Attack");
// import the rest of your models above

// set up the associations here
Deck.belongsTo(User)
User.hasOne(Deck)

// and then export them all below
module.exports = { 
    User,
    Card,
    Deck,
    Attack,
    // add the rest of your models here
};
