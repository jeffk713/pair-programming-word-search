exports.transpose = function (matrix) {
  let newMatrix = [];
  let matrixLength = matrix[0].length;

  for (let i = 0; i < matrixLength; i++) {
    newMatrix.push([]);
  }

  matrix.forEach((array, arrIndex) => {
    array.forEach((element, elIndex) => {
      newMatrix[elIndex][arrIndex] = element;
    });
  });

  return newMatrix;
};

