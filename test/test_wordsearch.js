const chai = require('chai');
const assert = chai.assert;
const transpose = require('../transpose');

const { wordSearch } = require('../wordsearch.js');

describe('#wordSearch()', function () {
  const letters = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ];

  it('should return false if the word is not present', function () {
    const result = wordSearch(letters, 'FRANK');

    assert.isFalse(result);
  });

  it('should return true if the word is present', function () {
    const result = wordSearch(letters, 'SEINFELD');

    assert.isTrue(result);
  });

  it('should return true if word is present in transposed word puzzle', function () {
    const result = wordSearch(transpose(letters), 'SEINFELD');

    assert.isTrue(result);
  });

  it('should return false if word is not present in transposed word puzzle', function () {
    const result = wordSearch(transpose(letters), 'FRANK');

    assert.isFalse(result);
  });

  it('should return undefine when letters are empty array', function () {
    const result = wordSearch([], 'SEINFELD');

    assert.isUndefined(result);
  });

  it('should return undefine when word is empty string', function () {
    const result = wordSearch(letters, '');

    assert.isUndefined(result);
  });

  it('should return true if word entered is not all capitalized but is present in transposed word puzzle', function () {
    const result = wordSearch(letters, 'Seinfeld');

    assert.isTrue(result);
  });

  it('should return false if word is not present tranposed and backwards', function () {
    const result = wordSearch(transpose(letters), 'FRANK');

    assert.isFalse(result);
  });

  it('should return true if word is present transposed and backwards', function () {
    const result = wordSearch(transpose(letters), 'DLEFNIES');

    assert.isTrue(result);
  });

  it('should return false if the word is not present backwards', function () {
    const result = wordSearch(letters, 'KNARF');

    assert.isFalse(result);
  });

  it('should return true if the word is present backwards', function () {
    const result = wordSearch(letters, 'DLEFNIES');

    assert.isTrue(result);
  });
});
