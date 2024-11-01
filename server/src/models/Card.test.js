const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./index");
const { db } = require('../db/config');

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: "Alaric Flamecaller",
    mojo: 10,
    stamina: 5,
    imgUrl: "https://example.com/fireball.jpg",
  })
});

// clear db after tests
afterAll(async () => await db.close());

describe("Card", () => {
  it("has an id", async () => {
    expect(card).toHaveProperty("id");
  });

  it("Initializes a new Deck", async () => {
    expect(card.name).toEqual("Alaric Flamecaller");
    expect(card.mojo).toBe(10);
    expect(card.stamina).toBe(5);
    expect(card.imgUrl).toEqual("https://example.com/fireball.jpg");
  })
});