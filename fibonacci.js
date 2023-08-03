// using iteration method

function fibs(n) {
  let seqArray = [];
  let fib;
  let a = 0;
  let b = 1;
  seqArray = [a, b];
  for (let i = 3; i <= n; i += 1) {
    fib = a + b;
    a = b;
    b = fib;
    seqArray.push(b);
  }
  return seqArray;
}

// using recursive method

function fibRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const seqArray = fibRec(n - 1);
  seqArray.push(seqArray[seqArray.length - 2] + seqArray[seqArray.length - 1]);
  return seqArray;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
