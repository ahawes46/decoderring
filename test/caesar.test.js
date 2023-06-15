// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");


describe("caesar", () => {
  it("should return the input shifted by shift number", () => { //normal case w/ characters (.)
    const input = "Bake.";
    const expected = "ednh.";
    const actual = caesar(input, 3);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return the input decoded by shift number", () => { //decode case + go to back alphabet
    const input = "wxbT ";
    const expected = "rswo ";
    const actual = caesar(input, 5,false);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return the input encoded by shift number", () => { //pos shift+encode + go to front alphabet
    const input = "gyzA!";
    const expected = "ldef!";
    const actual = caesar(input, 5,true);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if no shift", () => {
    const input = "bAke.";
   
    const actual = caesar(input);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("should return false if shift not in bounds specified", () => {
    const input = "bAke.";
   
    const actual = caesar(input,26);
    expect(actual).to.be.false;
  });
});