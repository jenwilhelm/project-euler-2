const MAX_VALUE = 4000000;

export function evenSum(maxValue = MAX_VALUE) {
  return addEvenValues(0, 1, 0, maxValue);
}

function addEvenValues(a, b, sum, max) {
  if (a >= max || b >= max) return sum;

  const isEven = (a + b) % 2 === 0;
  const newSum = isEven ? a + b + sum : sum;

  return addEvenValues(b, a + b, newSum, max);
}
