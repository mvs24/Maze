const checkMaze = (matrix) => {
  let stack = [];
  let invalids = [];
  let res = [];
  let finished = false;
  let initialIndexes = [];

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 1) {
      initialIndexes = [0, i];
    }
  }

  const mazeHelper = (matrix, i, j) => {
    if (nrOfZeros(matrix, i, j) >= 3) {
      invalids.push([i, j]);
    }

    invalids.forEach((el) => {
      if (stack.length > 0 && !finished) {
        if (el[0] === i && el[1] === j) {
          let last = stack.pop();
          mazeHelper(matrix, last[0], last[1]);
        }
      }
    });

    if (i === matrix.length - 1) {
      finished = true;
      res = [...stack];
    }
    if (
      matrix[i + 1] &&
      matrix[i + 1][j] === 1 &&
      !isInvalid(invalids, i + 1, j) &&
      !finished
    ) {
      stack.push([i + 1, j]);
      mazeHelper(matrix, i + 1, j);
    }

    if (
      j > 0 &&
      matrix[i][j - 1] === 1 &&
      !isInvalid(invalids, i, j - 1) &&
      !finished
    ) {
      stack.push([i, j - 1]);
      mazeHelper(matrix, i, j - 1);
    }

    if (
      j < matrix.length - 1 &&
      matrix[i][j + 1] === 1 &&
      !isInvalid(invalids, i, j + 1) &&
      !finished
    ) {
      stack.push([i, j + 1]);
      mazeHelper(matrix, i, j + 1);
    }

    if (
      i > 0 &&
      matrix[i - 1][j] === 1 &&
      !isInvalid(invalids, i - 1, j) &&
      !finished
    ) {
      stack.push([i - 1, j]);
      mazeHelper(matrix, i - 1, j);
    }
  };

  stack.push([initialIndexes[0], initialIndexes[1]]);
  mazeHelper(matrix, initialIndexes[0], initialIndexes[1]);

  return res;
};

function nrOfZeros(matrix, i, j) {
  let sum = 0;

  if (matrix[i + 1] && matrix[i + 1][j] === 0) {
    sum++;
  }
  if (i > 0 && matrix[i - 1][j] === 0) {
    sum++;
  }
  if (j > 0 && matrix[i][j - 1] === 0) {
    sum++;
  }
  if (j < matrix.length - 1 && matrix[i][j + 1] === 0) {
    sum++;
  }

  if (j === 0 || j === matrix.length - 1) {
    sum++;
  }

  return sum;
}

function isInvalid(invalids, i, j) {
  let invalid = false;

  invalids.forEach((el) => {
    if (el[0] === i && el[1] === j) {
      invalid = true;
    }
  });

  return invalid;
}

const matrix = [
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const matrix2 = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
];
const matrix3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
];

const matrix4 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const matrix5 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const matrix6 = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
];

const result = checkMaze(matrix2);
console.log(result);
