/*
    1. Write a program that takes the position of a Knight as an input on an 8x8
       chessboard.
    2. Given the position of the Knight, find all the possible places where the Knight can
       move. You can assume that there are no pieces of the opposite color and hence no
       blocks.
*/

function findPossibleMoves(mat: number[][], p: number, q: number) {
  // All possible moves of a knight
  let X: number[] = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y: number[] = [1, 2, 2, 1, -1, -2, -2, -1];

  let count: number = 0;
  let m: number = 4;
  let n: number = 4;

  // Check if each possible move is valid or not
  for (let i = 0; i < 8; i++) {
    // Position of knight after move
    let x = p + X[i];
    let y = q + Y[i];

    // count valid moves
    if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0) count++;
  }

  // Return number of possible moves
  return count;
}

// Let's Assume the chessboard of 4*4 and the position of the Knight is (2,2)

let chessboard: number[][] = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];

let p: number = 2,
  q: number = 2;

console.log("All possible moves : ", findPossibleMoves(chessboard, p, q));
