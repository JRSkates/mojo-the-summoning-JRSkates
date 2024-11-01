const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./Attack");
const { db } = require('../db/config');

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: "Fireball",
    mojoCost: 2,
    staminaCost: 1,
  })
});

// clear db after tests
afterAll(async () => await db.close());

describe("Attack", () => {
  it("has an id", async () => {
    expect(attack).toHaveProperty("id");
  });

  it("Initializes a new Deck", async () => {
    expect(attack.title).toEqual("Fireball");
    expect(attack.mojoCost).toBe(2);
    expect(attack.staminaCost).toBe(1);
  })
});