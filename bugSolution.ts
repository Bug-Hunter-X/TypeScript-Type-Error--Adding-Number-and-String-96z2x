function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); //Correct
console.log(result);

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  return numA + numB;
}

let result2 = addSafe(1, '2'); // Works even if passed string
console.log(result2);