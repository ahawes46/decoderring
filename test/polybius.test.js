// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");


describe("polybius", () => {
  it("should return the input encoded", () => { //normal case w/ space and caps and i/j
    const input = "My hEart i";
    const expected = "2345 3251112444 42";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should return the input decoded", () => { //decode case + i/j
    const input = "42 25423432";
    const expected = "(i/j) w(i/j)sh";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should return the false if odd number of nums", () => { //odd number of numbers
    const input = "344252513";  
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  });
});

