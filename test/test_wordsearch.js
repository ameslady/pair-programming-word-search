const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

 describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['B', 'R', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['U', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['S', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['T', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['R', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['A', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BUSTER')

    assert.isTrue(result);
  });

  it("should return false if the word isn't listed in sequence", function() {
    const result = wordSearch([
      ['N', 'R', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['M', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['J', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['O', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['O', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['X', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['X', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'NAMJOON')

    assert.isFalse(result);
  });
  

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the word search is empty", function() {
    const result = wordSearch([], 'HANNAH')

    assert.isFalse(result);
  });
});
