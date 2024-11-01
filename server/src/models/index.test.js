const { Attack, Card, Deck, User } = require('./index')
const { db } = require('../db/config')


describe('Attack, Card, Deck and User associations', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test("User-Deck associations", async () => {
        const user = await User.create({ username: "JRSkates" })
        const deck = await Deck.create({ name: "Jack's Deck", xp: 100 })

        // Associate the user with the deck
        await user.setDeck(deck)


        const foundUser = await User.findByPk(1, {
            include: Deck // Include the associated deck
        })

        console.log(JSON.stringify(foundUser, null, 2))

        expect(foundUser.Deck).toBeDefined();
        expect(foundUser.Deck.name).toBe("Jack's Deck");
    })
})