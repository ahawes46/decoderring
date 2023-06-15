// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");


describe("substitution", () => {
  it("should return the input encoded", () => { //encoding case w/ space and caps and characters
    const input = "I'm dOne.h";
    const alph="x*meulo#fnr!kpb@iwqs&vg^$a";
    const expected = "f'k ebpu.#";
    const actual = substitution(input,alph);
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should return the input decoded", () => { //decode case 
    const input = "&g^^mx as";
    const alph="x*meulo#fnr!kpb@iwqs&vg^$a";
    const expected = "uwxxca zt";
    const actual = substitution(input, alph, false);
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should return the false if not 26 letters in alphabet", () => { //odd number of numbers
    const input = "&g^^mx as";  
    const alph="x*meulo#fnr!kpb@iwqs&vg^$";
    const actual = substitution(input, false);
    expect(actual).to.be.false;
  });
});

describe("polybius", () => {
  it("should return the false if duplicate characters", () => { //odd number of numbers
    const input = "&g^^mx as";  
    const alph="x*meulo#fnr!kpb@iwqs&vg^$x";
    const actual = substitution(input, alph, true);
    expect(actual).to.be.false;
  });
});