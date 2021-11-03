const { transpose } = require('./transpose');

const searchWordInJoinedArr = (arr, testWord) => {
  let result = false;

  arr.forEach(wordChunk => {
    if (wordChunk.includes(testWord)) result = true;
  });

  return result;
};

exports.wordSearch = (letters, word) => {
  if (word === '' || letters.length === 0) return undefined;

  const upperCasedWord = word.toUpperCase();

  const horizontalJoin = letters.map(ls => ls.join(''));
  if (searchWordInJoinedArr(horizontalJoin, upperCasedWord)) return true;

  const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  if (searchWordInJoinedArr(backwardsHorizontalJoin, upperCasedWord))
    return true;

  const transposedLetters = transpose(letters);

  const transposeJoin = transposedLetters.map(ls => ls.join(''));
  if (searchWordInJoinedArr(transposeJoin, upperCasedWord)) return true;

  const backwardstransposeJoin = transposedLetters.map(ls =>
    ls.reverse().join('')
  );
  if (searchWordInJoinedArr(backwardstransposeJoin, upperCasedWord))
    return true;

  return false;
};
