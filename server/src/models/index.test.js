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

        // console.log(JSON.stringify(foundUser, null, 2))

        expect(foundUser.Deck).toBeDefined();
        expect(foundUser.Deck.name).toBe("Jack's Deck");
    })

    test("Deck-Card associations", async () => {
        const deck = await Deck.create({ name: "Jack's Deck", xp: 100 })
        const card1 = await Card.create({ name: "Alaric Flamecaller", mojo: 10, stamina: 5, imgUrl: "https://example.com/fireball.jpg" })
        const card2 = await Card.create({ name: "Theron Ironfist", mojo: 15, stamina: 7, imgUrl: "https://example.com/fireball-2.jpg" })

        // Associate the deck with the cards
        await deck.addCards(card1)
        await deck.addCards(card2)


        const foundDeck = await deck.getCards();

        // console.log(JSON.stringify(foundDeck, null, 2))

        expect(foundDeck.length).toBe(2)
        expect(foundDeck[0].name).toBe("Alaric Flamecaller")
        expect(foundDeck[1].name).toBe("Theron Ironfist")
        expect(foundDeck[0].DeckId).toBe(2)
        expect(foundDeck[1].DeckId).toBe(2)
    })
})